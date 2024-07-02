"use client";
import { Toaster } from "@/components/ui/toaster"
import "@/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
    <div className="flex-1">{children}</div>
    <Toaster/>
    </>

  )
}
