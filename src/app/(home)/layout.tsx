import type { Metadata } from "next";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by Home",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: "0px", overflow: "hidden" }}>
        <Header />
          {children}
        <Sidebar />
        <Footer />
      </body>
    </html>
  )
}