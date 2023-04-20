import { Metadata } from "next";
import Header from "./components/Header";
import Whatsapp from "./components/Whatsapp";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cris Veiculos",
  description:
    "Bem vindo(a), confira todos os carros que temos em nossa loja, Nos visite e faça sua oferta.",
  keywords: [
    "Venda de carros",
    "Venda de carros em porto alegre",
    "Venda de carros em alvorada",
    "Financiamento de carros",
    "Carros seminovos",
    "Seminovos",
    "Seminovos em alvorada",
    "Cris Semi novos",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#1d1d29]">
        <div className="sm:px-4 lg:px-6 mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px]">
          <Header />
          {children}
        </div>
        <Whatsapp />
      </body>
    </html>
  );
}
