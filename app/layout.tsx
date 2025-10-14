import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./Components/Home/Navbar/ResponsiveNav";
const font = Roboto({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900" ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Job Portal",
  description: "Task 1 - Job Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav></ResponsiveNav>
        {children}
      </body>
    </html>
  );
}
