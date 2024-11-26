"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useRef } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Todo } from "../types";
import { upsertTodo } from "../actions";
import { upsertTodoSchema } from "../schema";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

interface TodoUpsertSheetProps {
  children?: React.ReactNode;
  defaultValue?: Todo;
}

export const formSchema = z.object({
  title: z.string(),
});

export const TodoUpsertSheet = ({ children }: TodoUpsertSheetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(upsertTodoSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await upsertTodo(data);
      router.refresh();
      ref.current?.click();
      toast({
        title: "A new todo was added",
      });
    } catch (err) {
      console.log("something went wrong!", err);
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>

      <SheetContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="h-screen space-y-8"
          >
            <SheetHeader>
              <SheetTitle>Create Todo</SheetTitle>
              <SheetDescription>
                Add or edit your todo item here. Click save them when you are
                done
              </SheetDescription>
            </SheetHeader>

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Todo</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your todo title..." {...field} />
                  </FormControl>
                  <FormDescription>
                    This is title will be displayed on your tasks
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
      </SheetContent>
    </Sheet>
  );
};
