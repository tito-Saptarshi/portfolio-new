import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
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
import { adminMessage } from "@/actions/admin.actions";

export default async function ContactPage() {

  const sendMessageToAdmin = async (formdata: FormData) => {
     await adminMessage(formdata);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Information
                </CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">saptarshi.dev.20@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-600">New York, NY</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-gray-600">Usually within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card>
              <CardHeader>
                <CardTitle>Let's Work Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  I'm always interested in new opportunities and exciting
                  projects. Whether you need help with:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Consulting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    Technical Support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <form action={sendMessageToAdmin}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send Me a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as
                  possible
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or question..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Separator />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" className="flex-1">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Button
                    type="submit"
                    variant="outline"
                    className="flex-1 bg-transparent"
                  >
                    Clear Form
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  By sending this message, you agree to be contacted regarding
                  your inquiry.
                </p>
              </CardContent>
            </Card>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Prefer a different way to connect? Find me on{" "}
            <a href="#" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 hover:underline">
              GitHub
            </a>
            , or{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
