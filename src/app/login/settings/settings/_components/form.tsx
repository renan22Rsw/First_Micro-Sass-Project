"use client";

import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateProfile } from "../actions";
import { updateProfileSchema } from "../schema";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { SheetFooter } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Session } from "next-auth";

interface ProfileFormProps {
  defaultValues: Session["user"];
}

const ProfileForm = ({ defaultValues }: ProfileFormProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      email: defaultValues?.email ?? "",
    },
  });

  async function onSubmit(data: z.infer<typeof updateProfileSchema>) {
    try {
      await updateProfile(data);
      router.refresh();
      toast({
        title: "Your profile has been updated",
      });
    } catch (err) {
      console.log("something went wrong!", err);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="h-screen space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name..." {...field} />
              </FormControl>
              <FormDescription>
                This is title will be displayed name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email..." readOnly {...field} />
              </FormControl>
              <FormDescription>
                Please contact email contact@micro-sass.com to change the email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <SheetFooter className="mt-auto">
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </form>
    </Form>
  );
};

export default ProfileForm;
