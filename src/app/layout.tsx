import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/contexts/Providers";
import ToastContext from "@/contexts/ToastContext";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Readify | Search",
  description: "Search For your Favorite Book",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-full text-black overflow-x-hidden">
        <Loading>
          <Providers>
            <ToastContext />
            {children}
          </Providers>
        </Loading>
      </body>
    </html>
  );
}
