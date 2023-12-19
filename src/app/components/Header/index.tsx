import Image from "next/image";
import Logo from "./logo.png";
import LogoNeo from "./logoNeo.png";
import Link from "next/link";
import { MapIcon, Instagram } from "lucide-react";

export default function Header() {
  return (
    <div className="mb-16">
      <header className="flex items-center  py-2 mt-2">
        <div className="sm:mr-2 lg:mr-4">
          <Link href={`/`}>
            <Image
              src={Logo}
              alt="Cris Veiculos"
              height={130}
              className="rounded-2xl"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-white sm:text-sm lg:text-3xl sm:mr-4">
            Compra e Venda de Semi-Novos
          </p>
          <p className="text-white text-xs">
            Financiamento em 48x, cartão em 21x
          </p>
        </div>
      </header>

      <div className="flex lg:items-center flex-col lg:flex-row text-sm justify-between relative my-2">
        <div className="flex">
          <div className="text-white flex items-center text-lg mb-6 lg:mb-0">
            <MapIcon />
            <a
              href="#ondeEstamos"
              className="mr-4 cursor-pointer underline  pl-3"
            >
              Onde Estamos
            </a>
          </div>
          <div className="text-white flex items-center text-lg mb-6 lg:mb-0">
            <Instagram />
            <a
              href="https://www.instagram.com/crisquadrosveiculos/"
              target="_blank"
              className="mr-4 cursor-pointer underline  pl-3"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="flex items-center text-white">
          <a href="#neoProtege" className="mr-2 font-semibold">
            Parceria com
          </a>
          <a href="https://neoprotege.com.br/" target="_blank">
            <Image
              src={LogoNeo}
              alt="Neo Protege"
              height={40}
              className="rounded"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
