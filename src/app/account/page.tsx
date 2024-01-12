"use client";

import { Button } from "@/components/ui/button";
import API from "@/services/API";

export default function AccountPage() {
  const handleSubscribe = async () => {
    try {
      const response = await API.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error: any) {
      console.log("Error", error.message);
    }
  };

  return (
    <div>
      <Button onClick={handleSubscribe}>Upgrade</Button>
    </div>
  );
}
