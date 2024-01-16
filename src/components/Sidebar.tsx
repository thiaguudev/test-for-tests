"use client";

import React from "react";
import Link from "next/link";

import { Blocks, LayoutDashboard, Menu, Settings, Star } from "lucide-react";

export default function Sidebar() {
  const menus = [
    { name: "Dashboard", link: "/", icon: LayoutDashboard },
    { name: "Online Reputation", link: "/online-reputation", icon: Star },
    { name: "Integrations", link: "/integrations", icon: Blocks },
    { name: "Settings", link: "/settings", icon: Settings },
  ];

  return (
    <aside className="bg-[#0e0e0e] min-h-screen w-72 text-gray-100 px-4">
      <div className="py-3 flex justify-end">
        <Menu size={26} className="cursor-pointer" />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu, i) => {
          return (
            <Link
              href="/settings"
              key={i}
              className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800"
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2>{menu.name}</h2>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
