import Image from "next/image";
import Logo from "./logo.png";
import { CheckCheck } from "lucide-react";
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
      <div className="flex items-center justify-center">
        <p className="text-white sm:text-sm lg:text-3xl sm:mr-4">
          Compra e Venda de Semi-Novos
        </p>
        {/* <CheckCheck className="sm:hidden lg:flex" color="#2F4858" size={48} /> */}
      </div>
    </header>
  );
}
