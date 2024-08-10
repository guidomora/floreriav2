import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Floreria Morabito",
  description: "Ramos premium, condolencias, cajas de flores, envio de flores, coronas, ramos de novia, regalos,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Rubik:wght@300&display=swap" rel="stylesheet"/>
            </head>
            <body>
              <nav>
                <Nav />
              </nav>
              {children}
            </body>
          </html>
          );
}
