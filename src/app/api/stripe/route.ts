import { NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";

import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";

const settingsUrl = process.env.NEXTAUTH_URL + "/account";

export async function GET() {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return new NextResponse("unauthorised", {
        status: StatusCodes.UNAUTHORIZED,
      });
    }

    const userSubscription = await prisma.userSubscription.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    // cancel at the billing portal
    if (userSubscription && userSubscription.stripeCustomerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerId,
        return_url: settingsUrl,
      });
      return NextResponse.json({ url: stripeSession.url });
    }

    // user's first time subscribing
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: session.user.email ?? "",
      line_items: [
        {
          price_data: {
            currency: "BRL",
            product_data: {
              name: "sourveyapoli",
              description: "Sourvey Apoli",
            },
            unit_amount: 9900,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId: session.user.id,
      },
    });
    return NextResponse.json({ url: stripeSession.url });
  } catch (error) {
    console.log("[STRIPE ERROR]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
