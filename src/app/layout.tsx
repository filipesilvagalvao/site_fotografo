import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Archivo_Black, Roboto, Pacifico } from "next/font/google";
import Zap from "@/components/zap/Zap";
import Footer from "@/components/footer/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Marcos Matheus | Fotógrafo em Pompéu – Ensaios Profissionais",
  description: "Marcos Matheus é fotógrafo em Pompéu – MG, especializado em ensaios femininos, gestantes e corporativos. Atendimento com hora marcada.",
  authors: [{ name: "Marcos Matheus", url: "https://www.marcosmatheusfotografias.com.br" }],
  keywords: [
    "fotógrafo em Pompéu MG",
    "fotógrafo profissional em Pompéu",
    "ensaio fotográfico em Pompéu MG",
    "ensaio feminino em Pompéu",
    "ensaio sensual em Pompéu",
    "ensaio masculino em Pompéu",
    "ensaio gestante em Pompéu",
    "ensaio de casal em Pompéu",
    "ensaio pré wedding em Pompéu",
    "fotografia profissional em Pompéu MG",
    "estúdio fotográfico em Pompéu",
    "fotógrafo para casamento em Pompéu",
    "fotógrafos perto de mim em Pompéu"
  ],
  openGraph: {
    title: "Marcos Matheus | Fotógrafo em Pompéu – Ensaios Profissionais",
    description: "Marcos Matheus é fotógrafo em Pompéu – MG, especializado em ensaios femininos, gestantes e corporativos. Atendimento com hora marcada.",
    images: [
      {
        url: "/logo/marcos-matheus-fotografias-logo.png",
        width: 512,
        height: 512,
      }
    ]
  }
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3J1HSDSR3P"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-3J1HSDSR3P');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
        <Zap />
        <Footer />
      </body>
    </html>
  );
}
