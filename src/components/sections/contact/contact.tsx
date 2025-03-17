import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Slot } from "@radix-ui/react-slot";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." }),
  subject: z.enum(["general", "support", "feedback"], {
    message: "Please select a subject.",
  }),
});

export default function Contact() {
  const [submittedData, setSubmittedData] = useState<null | z.infer<
    typeof formSchema
  >>(null);
  const [showMessage, setShowMessage] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      subject: "general",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmittedData(values);
    setShowMessage(true);
    form.reset();

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  return (
    <section id="contact" className="container h-vh-100 relative">
      {submittedData && showMessage && (
        <Slot className="absolute right-5 bottom-6 bg-foreground">
          <div className="mt-4 p-4 flex flex-col justify-start text-secondary rounded-md animate-slideDown">
            <h2 className="font-semibold text-center">Successfully Sent! ✅</h2>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Subject:</strong> {submittedData.subject}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message.substring(0, 30)}
            </p>
          </div>
        </Slot>
      )}
      <div className="container">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-background">
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message..."
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
