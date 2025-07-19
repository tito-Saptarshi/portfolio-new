"use client";

import { useState, useRef } from "react";
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

export function ContactPageForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      console.log("api post hit");
      
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      setStatus(result);

      if (result.success) {
        e.currentTarget.reset();
      }
    } catch (err) {
      console.error("Client error:", err);
      setStatus({ success: false, message: "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  const onClear = () => {
    formRef.current?.reset();
    setStatus(null);
  };

  return (
    <form onSubmit={onSubmit} ref={formRef}>
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
            <Button type="submit" className="flex-1" disabled={loading}>
              {loading ? (
                <div className="flex items-center justify-center w-full gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={onClear}
              disabled={loading}
            >
              Clear Form
            </Button>
          </div>

          {/* Status */}
          {status && (
            <p
              className={`text-sm text-center mt-2 ${
                status.success ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}

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
