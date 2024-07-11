"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <Button onClick={goBack} className="rounded-full" variant={"ghost"}>
      <ArrowLeftIcon />
    </Button>
  );
};
