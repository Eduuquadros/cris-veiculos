import Image from "next/image";
import Logo from "./logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex py-2 mt-2">
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
  );
}
