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
      <body>
        <nav>
          <Nav />
        </nav>
        {children}
      </body>
    </html>
  );
}
