
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Navbar/Nav";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Car Doctor",
  description: "Car Doctor - Expert car maintenance and repair services",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript forceColorScheme="light" />
      </head>
      <body className={`${roboto.variable} font-sans antialiased`}>
        <MantineProvider>
          <div className="w-11/12 min-h-screen mx-auto p-2">
            <Nav />
            {children}
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
