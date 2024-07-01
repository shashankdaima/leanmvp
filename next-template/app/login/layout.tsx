import "@/styles/globals.css"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="h-screen flex flex-col    items-center justify-center">{children}</div>

  )
}
