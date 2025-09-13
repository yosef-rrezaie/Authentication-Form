import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/providers/Providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "سایت",
  description: "A simple authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="">
        <Providers>{children}</Providers>
        <Toaster position="bottom-left" />
      </body>
    </html>
  );
}
