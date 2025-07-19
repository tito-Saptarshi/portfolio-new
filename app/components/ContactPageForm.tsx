"use client";

import { useState, useRef, useEffect, useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Send } from "lucide-react";
import { adminMessage } from "@/actions/admin.actions";
import { toast } from "sonner";
import { SubmitButton } from "./SubmitButtons";

const initialState = {
  message: "",
  status: false,
};

export function ContactPageForm() {
  const [state, formAction] = useActionState(adminMessage, initialState);

  const formRef = useRef<HTMLFormElement>(null);

  const onClear = () => {
    formRef.current?.reset();
  };

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            Send Me a Message
          </CardTitle>
          <CardDescription>
            Fill out the form below and I'll get back to you as soon as possible
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" required />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="company">Company (Optional)</Label>
            <Input
              id="company"
              name="company"
              placeholder="Your Company Name"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              placeholder="What's this about?"
              required
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or question..."
              className="min-h-[120px]"
            />
          </div>

          <Separator />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <SubmitButton buttonText="send" loadingText="sending..." />

            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={onClear}
            >
              Clear Form
            </Button>
          </div>

          {/* Status */}
          {/* {status && (
            <p
              className={`text-sm text-center mt-2 ${
                status.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )} */}

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 text-center">
            By sending this message, you agree to be contacted regarding your
            inquiry.
          </p>
        </CardContent>
      </Card>
    </form>
  );
}
