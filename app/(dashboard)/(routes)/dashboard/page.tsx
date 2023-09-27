"use client";

import { MessageSquare } from "lucide-react";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
]

const DashboardPage = () => {
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font bold text-center">
          The Best AI Multimedia Generator
        </h2>
        <p className="text-muted-foreground font-;ight text-sm md:text-lg text-center">
           Generate Contents With The Latest AI Technology
        </p>
      </div>
      <div className ="px-4 md:px-20 lg:px-32 space-y-4">

      </div>
    </div>
  )
}
  
export default DashboardPage;