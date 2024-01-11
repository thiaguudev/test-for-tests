import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    data: [
      {
        id: 1,
        title: "Survey #1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui ligula. Morbi gravida condimentum aliquet. Donec tempus finibus ex at lacinia. Praesent a metus.",
        responses: 2,
        link: "https://www.google.com",
        published: true,
      },
      {
        id: 2,
        title: "Survey #2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui ligula. Morbi gravida condimentum aliquet. Donec tempus finibus ex at lacinia. Praesent a metus.",
        responses: 2,
        link: "",
        published: true,
      },
      {
        id: 3,
        title: "Survey #3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui ligula. Morbi gravida condimentum aliquet. Donec tempus finibus ex at lacinia. Praesent a metus.",
        responses: 2,
        link: "",
        published: false,
      },
      {
        id: 4,
        title: "Survey #4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui ligula. Morbi gravida condimentum aliquet. Donec tempus finibus ex at lacinia. Praesent a metus.",
        responses: 4,
        link: "",
        published: false,
      },
      {
        id: 5,
        title: "Survey #5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae dui ligula. Morbi gravida condimentum aliquet. Donec tempus finibus ex at lacinia. Praesent a metus.",
        responses: 0,
        link: "",
        published: true,
      },
    ],
  });
}
