import { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

type SurveyCardProps = {
  title: string;
  description?: string;
  responses: number;
  link: string;
  published: boolean;
} & React.ComponentProps<typeof Card>;

export default function SurveyCard({
  title,
  description,
  className,
  responses,
  link,
  published,
  ...props
}: SurveyCardProps) {
  const [hasCopy, setHasCopy] = useState<boolean>(false);

  const handleCopy = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText(link);
    setHasCopy(true);
  };

  return (
    <div
      className={cn(
        "w-full max-w-[548px] h-[263.859px] p-5 rounded-md border border-transparent shadow-lg hover:border-blue-200 flex flex-col justify-between",
        className
      )}
      {...props}
    >
      <div>
        <h3 className="text-2xl mb-1">{title}</h3>
        <p className="text-gray-500 text-lg">
          {description || "No description"}
        </p>
      </div>

      <div>
        <p className="text-xl">{responses} responses</p>
        <Separator className="m-3" />
        <div className="flex justify-between items-center">
          <Link
            onClick={handleCopy}
            href={link}
            className="text-emerald-500 hover:text-emerald-600 text-xl"
          >
            {hasCopy ? "Copied!" : "Copy survey link"}
          </Link>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" checked={published} />
            <Label htmlFor="airplane-mode">Publish</Label>
          </div>
        </div>
      </div>
    </div>
  );
}
