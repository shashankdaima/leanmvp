"use client";
import { Toaster } from "@/components/ui/toaster"
import "@/styles/globals.css"
import CollapsibleLayout from "./collapsible-layout";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { title } from "process";
import { Suspense, useEffect } from "react";
import useErrorStore from "@/lib/dashboardErrorHook";

interface RootLayoutProps {
  children: React.ReactNode
}
export default function DashboardLayout({
  children,
  counter,
  traffic,
  distribution,
}: {
  children: React.ReactNode,
  counter: React.ReactNode,
  traffic: React.ReactNode,
  distribution: React.ReactNode,
}) {
  const { toast } = useToast()
  const { errorMessage } = useErrorStore();

  useEffect(() => {
    // console.log
    if (errorMessage != null && errorMessage != "") {
      toast({
        title: "Error Occurred",
        description: errorMessage
      });
    }
  }, [
    errorMessage
  ]);
  return (
    <>

      <CollapsibleLayout >
        <div className="p-6 flex  flex-col flex-grow max-w-6xl gap-6">

          <motion.div initial={{ opacity: 0, y: -10, x: 0, }}
            animate={{ opacity: 1, y: 0, x: 0, }}
            transition={{ duration: .75 }} className="px-2 font-semibold">Today </motion.div>
          <div>{counter}</div>
          <div>{distribution}</div>
          <div>{traffic}</div>
          {children}
        </div>
      </CollapsibleLayout>
      <Toaster />
    </>
  );
}