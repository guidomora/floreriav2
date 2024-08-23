import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import { DataProvider } from "./context/DataProvider";

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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:wght@300..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-50">
        <header>
          <nav>
            <Nav />
          </nav>
        </header>
        <main>
          <DataProvider >
            {children}
          </DataProvider>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
