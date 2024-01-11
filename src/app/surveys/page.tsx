"use client";

import { useEffect, useState } from "react";

import API from "@/services/API";
import SurveyCard from "@/components/SurveyCard";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function SurveyPage() {
  const [surveys, setSurveys] = useState<any>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await API.get("/api/surveys");
      setSurveys(data.data);
    };

    fetch();
  }, []);

  if (!surveys.length) {
    return (
      <div className="grid grid-cols-2 gap-5 mt-5 justify-items-center">
        <Skeleton className="w-full max-w-[548px] h-[263.859px] rounded-md" />
        <Skeleton className="w-full max-w-[548px] h-[263.859px] rounded-md" />
        <Skeleton className="w-full max-w-[548px] h-[263.859px] rounded-md" />
        <Skeleton className="w-full max-w-[548px] h-[263.859px] rounded-md" />
      </div>
    );
  }

  return (
    <Container>
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-3xl">Surveys</h2>
        <Button variant="default" size="lg" className="text-xl">
          Create survey
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5 justify-items-center">
        {surveys.map((survey: any) => {
          return <SurveyCard key={survey.id} {...survey} />;
        })}
      </div>
    </Container>
  );
}
