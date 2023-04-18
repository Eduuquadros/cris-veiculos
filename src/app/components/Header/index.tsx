import Image from "next/image";
import Logo from "./logo.png";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex py-6">
      <div className="sm:mr-2 lg:mr-6">
        <Link href={`/`}>
          <Image
            src={Logo}
            alt="Cris Veiculos"
            width={80}
            className="rounded-2xl"
          />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white sm:text-sm lg:text-3xl sm:mr-2 lg:mr-4">
          Compra e Venda de Semi-Novos
        </p>
        <CheckCircle className="sm:hidden lg:flex" color="#45aede" size={48} />
      </div>
    </header>
  );
}
