// "use client";

import Link from "next/link";

import React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "./Icons";
import { getAuthSession } from "@/lib/auth";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import UserAvatar from "./UserAvatar";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <Link href="/">
//             <Icons.logo />
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger className="text-xl">
//             <Link href="/surveys">Surveys</Link>
//           </NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <Icons.logo />
//                     <div className="mb-2 mt-4 text-xl font-medium">
//                       shadcn/ui
//                     </div>
//                     <p className="text-xl leading-tight text-muted-foreground">
//                       Beautifully designed components built with Radix UI and
//                       Tailwind CSS.
//                     </p>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//               <ListItem href="/docs" title="Introduction">
//                 Re-usable components built using Radix UI and Tailwind CSS.
//               </ListItem>
//               <ListItem href="/docs/installation" title="Installation">
//                 How to install dependencies and structure your app.
//               </ListItem>
//               <ListItem href="/docs/primitives/typography" title="Typography">
//                 Styles for headings, paragraphs, lists...etc
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger className="text-xl">
//             Reports
//           </NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//               {components.map((component) => (
//                 <ListItem
//                   key={component.title}
//                   title={component.title}
//                   href={component.href}
//                 >
//                   {component.description}
//                 </ListItem>
//               ))}
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/branding" legacyBehavior passHref>
//             <NavigationMenuLink
//               className={navigationMenuTriggerStyle({ className: "text-xl" })}
//             >
//               Branding
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/contacts" legacyBehavior passHref>
//             <NavigationMenuLink
//               className={navigationMenuTriggerStyle({ className: "text-xl" })}
//             >
//               Contacts
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/integrations" legacyBehavior passHref>
//             <NavigationMenuLink
//               className={navigationMenuTriggerStyle({ className: "text-xl" })}
//             >
//               Integrations
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <Link href="/docs" legacyBehavior passHref>
//             <NavigationMenuLink
//               className={navigationMenuTriggerStyle({ className: "text-xl" })}
//             >
//               Documentation
//             </NavigationMenuLink>
//           </Link>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-xl font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-xl leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

export default async function Header() {
  const session = await getAuthSession();

  return (
    <header className="flex items-center justify-between h-[65px] gap-8 px-4 mx-auto text-xl border-b bg-white z-30 w-full">
      {/* <NavigationMenuDemo /> */}
      <nav className="">
        <ul className="flex justify-between items-center gap-8">
          <li>
            <Link href="/">
              <Image
                src="/5.png"
                alt="Logo Survey Apoli"
                width={100}
                height={100}
              />
            </Link>
          </li>
          <li>
            <Link href="/surveys">Surveys</Link>
          </li>
          <li>
            <Link href="/reports">Reports</Link>
          </li>
          <li>
            <Link href="/branding">Branding</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/integrations">Integrations</Link>
          </li>
          <li>
            <Link href="/docs">Documentation</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-between items-center gap-5">
        {session?.user ? (
          <>
            <ul className="flex gap-8">
              <li>
                <Link href="#">Help</Link>
              </li>
              <li>
                <Link href="/account">Account</Link>
              </li>
            </ul>
            <UserAvatar user={session?.user} />
            {/* <SignOutButton /> */}
          </>
        ) : (
          <SignInButton />
        )}
      </div>
    </header>
  );
}
