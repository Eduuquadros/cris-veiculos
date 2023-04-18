import { ICar } from "../dto/ICars";
import { Car, Settings } from "lucide-react";
import { Gallery } from "../components/Images";
import Link from "next/link";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const response = await fetch(`${process.env.VERCEL_URL}/api/cars/${slug}`, {
    cache: "no-store",
  });

  const car = (await response.json()).carro as ICar;

  return (
    <main className="mt-5 mb-10">
      <p className="text-white text-3xl border-l-4 pl-2 mb-4 border-[#45aede]">
        {car.titulo}
      </p>
      <div className="sm:flex flex-col lg:grid grid-cols-3 mt-8">
        <div className="bg-[#21252c] flex flex-col justify-between shadow-2xl px-6 py-6 sm:order-2 lg:order-1">
          <div>
            <p className="text-white text-4xl mb-6">{car.preco}</p>
            <p className="font-bold text-white mb-4 flex items-center">
              <Settings className="mr-2" color="#45aede" />
              Detalhes
            </p>
            <p className="text-white mb-1 text-lg">
              Ano: <strong>{car.ano}</strong>
            </p>
            <p className="text-white mb-1 text-lg">{car.kilometragem}</p>
            <p className="font-bold text-white mb-4 mt-10 flex items-center">
              <Car className="mr-2" color="#45aede" />
              Acessórios
            </p>
            <p className="whitespace-pre-line text-white">{car.acessorios}</p>
          </div>

          <a
            href={`https://api.whatsapp.com/send?phone=5551992711960&text=Olá Cris%0atenho interesse no ${car.titulo} ${car.ano} que vi no site %0apodemos conversar?`}
            target="_blank"
          >
            <button className="w-full rounded-full bg-[#45aede] text-white px-8 py-2 font-semibold text-LG hover:opacity-70">
              ENTRAR EM CONTATO
            </button>
          </a>
        </div>
        <div className="col-span-2 text-sm sm:order-1 lg:order-2 sm:mb-10 md:mb-0">
          <Gallery images={car.fotos.fotos} />
        </div>
      </div>
    </main>
  );
}
