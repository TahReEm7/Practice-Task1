import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";
import { Footer, Navbar } from "../components";


const roboto = Roboto({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Car Doctor",
  description: "Car Doctor - Expert car maintenance and repair services",
  icons: {
    icon: "/logo.png",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <MantineProvider>
          <div className="w-11/12 min-h-screen mx-auto p-2">
            <Navbar />
            {children}
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
