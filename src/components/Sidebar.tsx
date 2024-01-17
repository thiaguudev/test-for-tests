"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Blocks,
  HelpCircle,
  LayoutDashboard,
  MessagesSquare,
  Moon,
  Settings,
  Star,
} from "lucide-react";

import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";

type SidebarItemProps = {
  to: string;
  name: string;
  icon: any;
};

function SidebarItem({ to, name, icon: Icon }: SidebarItemProps) {
  const path = usePathname();

  return (
    <Link
      href={to}
      className={`flex w-[240px] h-[44px] items-center px-4 py-3 gap-4 rounded-xl hover:bg-[#14161B] ${
        to === path && "bg-[#14161B] border-2 solid border-emerald-300"
      }`}
    >
      <Icon size={24} />
      <span>{name}</span>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <aside className="bg-[#21262D] w-[276px] min-h-screen rounded-tr-xl rounded-br-xl text-white flex justify-center">
      <div className="py-8 flex flex-col items-start justify-between">
        {/* TOP */}
        <div className="flex gap-3 items-center mb-6 justify-center flex-col w-full">
          <div className="flex gap-3">
            <Image src="/grid.svg" width={30} height={30} alt="" />
            <p className="font-bold text-xl">Survey Apoli</p>
          </div>
          <Separator className="my-2" />
        </div>
        {/* END TOP */}

        {/* CENTER */}

        <div className="flex flex-col gap-2">
          <SidebarItem
            to="/dashboard"
            icon={LayoutDashboard}
            name="Dashboard"
          />
          <SidebarItem to="/surveys" icon={MessagesSquare} name="Surveys" />
          <SidebarItem
            to="/online-reputation"
            icon={Star}
            name="Online Reputation"
          />
          <SidebarItem to="/integrations" icon={Blocks} name="Integrations" />
        </div>
        {/* END CENTER */}

        {/* BOTTOM */}
        <div className="flex flex-col gap-2">
          <Separator className="my-2" />
          <span className="text-[#83899F]">Preferences</span>
          <SidebarItem to="/settings" icon={Settings} name="Settings" />
          <SidebarItem to="/help-center" icon={HelpCircle} name="Help Center" />

          <div className="flex items-center gap-[10px] bg-[#313743] rounded py-3 px-4">
            <div className="flex gap-2 items-center">
              <Moon size={24} />
              <span className="text-[17px]">Dark Mode</span>
            </div>
            <Switch />
          </div>
        </div>
        {/* END BOTTOM */}
      </div>
    </aside>
  );
}
