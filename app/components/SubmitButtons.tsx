"use client";

import { Button } from "@/components/ui/button";
import { Heart, Loader2, UserPlus } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  buttonText,
  loadingText,
}: {
  buttonText: string;
  loadingText: string;
}) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled className="flex-1">
          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
          {loadingText}
        </Button>
      ) : (
        <Button type="submit" className="flex-1">
          {buttonText}
        </Button>
      )}
    </>
  );
}
