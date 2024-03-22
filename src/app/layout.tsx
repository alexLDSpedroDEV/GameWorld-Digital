import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './styles.css';



export const metadata: Metadata = {
  title: "Portifolio profissional",
  description: "meu portifolio com todos os meus arquivos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
