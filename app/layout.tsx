import type { Metadata } from "next";
import "./globals.css";
import { relative } from "path";
import Navbar from "./'components'/nav";
import Footer from "./'components'/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Discover affordable cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
