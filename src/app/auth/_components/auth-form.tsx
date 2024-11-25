"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// import { AlertCircle, Loader2 } from "lucide-react";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useForm } from "react-hook-form";
import { toast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

export const AuthForm = () => {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      await signIn("nodemailer", { email: data.email, redirect: false });
      toast({
        title: "Magic link sent",
        description: "Check your email for the magic link to login.",
      });
    } catch (err) {
      toast({
        title: "Error message",
        description: `"An error occurred: ${err}. Please try again`,
      });
    }
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Enter your email to receive a magic link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  {...form.register("email")}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button
            className="w-full"
            onClick={handleSubmit}
            disabled={form.formState.isSubmitted}
          >
            {form.formState.isSubmitted ? "sending..." : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
