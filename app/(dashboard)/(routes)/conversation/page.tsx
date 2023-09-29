"use client";

import * as z from "zod";
import { MessageSquare, MessagesSquare, MessagesSquareIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { formSchema } from "./constants";

const ConversationPage = () => {
  const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({

    defaultValues: {
      prompt: ""
    }
  });

  return ( 
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form 

              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
             
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
   );
}
 
export default ConversationPage;
