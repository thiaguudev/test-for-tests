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
  LogOut,
} from "lucide-react";

import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { cn } from "@/lib/utils";

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
      className={`flex w-[240px] h-[44px] items-center px-4 py-3 gap-4 rounded-xl hover:bg-[#14161B] transition-all duration-100 hover:border-2 hover:solid hover:border-emerald-300 ${
        to === path && "bg-[#14161B]"
      }`}
    >
      <Icon size={24} />
      <span>{name}</span>
    </Link>
  );
}

export default function Sidebar() {
  const { toast } = useToast();

  return (
    <aside className="bg-[#21262D] w-[276px] min-h-screen rounded-tr-xl rounded-br-xl text-white flex justify-center">
      <div className="pt-8 pb-3 flex flex-col items-start justify-between">
        <div className="flex gap-3 items-center mb-6 justify-center flex-col w-full">
          <div className="flex gap-3">
            <Image src="/grid.svg" width={30} height={30} alt="" />
            <p className="font-bold text-xl">Survey Apoli</p>
          </div>
          <Separator className="my-2" />

          <div className="flex flex-col gap-2">
            <SidebarItem to="/dashboard" icon={LayoutDashboard} name="Painel" />
            <SidebarItem to="/surveys" icon={MessagesSquare} name="Pesquisas" />
            <SidebarItem
              to="/online-reputation"
              icon={Star}
              name="Reputação Online"
            />
            <SidebarItem to="/integrations" icon={Blocks} name="Integrações" />
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-between">
          <Separator className="my-2" />
          <span className="text-[#83899F]">Preferências</span>

          <SidebarItem to="/settings" icon={Settings} name="Configurações" />
          <SidebarItem to="/help-center" icon={HelpCircle} name="Help Center" />

          <div className="flex items-center gap-[10px] bg-[#313743] rounded py-3 px-4">
            <div className="flex gap-2 items-center grow">
              <Moon size={24} />
              <span className="text-[17px]">Dark Mode</span>
            </div>
            <Switch />
          </div>

          <Button
            variant="destructive"
            className="flex gap-3 bg-red-500"
            onClick={() =>
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
                action: (
                  <ToastAction altText="Try again">Try again</ToastAction>
                ),
              })
            }
          >
            <LogOut />
          </Button>
        </div>
      </div>
    </aside>
  );
}
