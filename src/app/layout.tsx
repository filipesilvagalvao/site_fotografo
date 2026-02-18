import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Archivo_Black, Roboto, Pacifico } from "next/font/google";
import Zap from "@/components/zap/Zap";


export const metadata: Metadata = {
  title: "Marcos Matheus Fotógrafo",
  description: "Venha conhecer meu trabalho, explore as categorias.",
};

export const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${archivoBlack.variable} ${roboto.variable} ${pacifico.variable}`}>
      <body>
        <Header />
        {children}
         <Zap/>
      </body>
    </html>
  );
}
