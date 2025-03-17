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
import SectionHeader from "@/components/ui/section-header";
import { Icons } from "@/components/icons";
import Link from "next/link";

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
    <section
      id="contact"
      className="containerrounded-none py-8 h-vsh-100 relative"
    >
      <SectionHeader label="Contact" className="mb-8">
        <Icons.contact className="size-7" />
      </SectionHeader>

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

      <div className="container ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 items-start">
              <div className="min-w-full flex flex-col gap-4 order-2 lg:order-1">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="lg:min-w-80">
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
                    <FormItem className="lg:min-w-80">
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
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <article className="w-full flex flex-col justify-between order-1 lg:order-2">
                <p className="text-xl lg:text-4xl text-foreground px-8 text-center">
                  <samp>If you have any questions or feedback </samp>
                  <samp className="text-primary">please contact me</samp>
                </p>
                <div className="flex p-2 gap-6 justify-center space-x-4">
                  <Link
                    className="hover:animate-ping"
                    target="blank"
                    href="https://www.linkedin.com/in/roland-artmeladze"
                  >
                    <Icons.linkedin className="size-10" />
                  </Link>
                  <Link
                    className="hover:animate-ping"
                    target="blank"
                    href="https://github.com/rolandiartmeladze"
                  >
                    <Icons.github className="size-10" />
                  </Link>
                </div>
              </article>
            </div>
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
