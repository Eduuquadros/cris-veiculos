import { ICar } from "../dto/ICars";
import { Car, Settings, ArrowLeftCircle } from "lucide-react";
import { Gallery } from "../components/Images";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const response = await fetch(`${process.env.API_URL}/api/cars/${slug}`, {
    cache: "no-store",
  });

  const car = (await response.json()).carro as ICar;

  return (
    <main className="mt-5 mb-24">
      <div className="flex items-center justify-between mb-4">
        <p className="text-white text-3xl border-l-4 pl-2 border-[#3B3F46]">
          {car.titulo}
        </p>
        <Link
          href="/"
          className="text-white text-md flex items-center cursor-pointer"
        >
          <ArrowLeftCircle className="mr-2" size={20} />
          Voltar
        </Link>
      </div>
      <div className="sm:flex flex-col lg:grid grid-cols-3 mt-8">
        <div className="bg-[#21252c] flex flex-col justify-between shadow-2xl px-6 py-6 sm:order-2 lg:order-1">
          <div>
            <p className="text-white text-4xl mb-6">{car.preco}</p>
            <p className="font-bold text-white mb-4 flex items-center">
              <Settings className="mr-2" color="white" />
              Detalhes
            </p>
            <p className="text-white mb-1 text-lg">
              Ano: <strong>{car.ano}</strong>
            </p>
            <p className="text-white mb-1 text-lg">{car.kilometragem}</p>
            <p className="font-bold text-white mb-4 mt-10 flex items-center">
              <Car className="mr-2" color="white" />
              Acessórios
            </p>
            <p className="whitespace-pre-line text-white">{car.acessorios}</p>
          </div>

          <a
            href={`https://api.whatsapp.com/send?phone=5551992711960&text=Olá Cris%0atenho interesse no ${car.titulo} ${car.ano} que vi no site %0apodemos conversar?`}
            target="_blank"
          >
            <button className="mt-10 w-full rounded-full bg-[#25d366] text-white px-8 py-2 text-LG hover:opacity-70">
              ENTRAR EM CONTATO
            </button>
          </a>
        </div>
        <div className="col-span-2 text-sm sm:order-1 lg:order-2 sm:mb-0 md:mb-0">
          <Gallery images={car.fotos.fotos} />
        </div>
      </div>
    </main>
  );
}
