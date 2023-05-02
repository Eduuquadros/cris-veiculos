import { ICarsResponse } from "./dto/ICars";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Page() {
  const response = await fetch(`${process.env.API_URL}/api/cars`, {
    cache: "no-store",
  });

  const cars = ((await response.json()) as ICarsResponse).carros;

  return (
    <main className="mt-5 mb-10">
      <p className="text-white text-2xl border-l-4 pl-2 border-[#3B3F46]">
        NOSSO ESTOQUE
      </p>

      <div className="mt-8 lg:grid grid-cols-3 gap-6 cursor-pointer">
        {cars
          .sort((a, b) => ("" + a.carroStatus).localeCompare(b.carroStatus!))
          .map((car) => (
            <div key={car.id} className="sm:mb-8 lg:mb-0">
              <Link href={`/${car.url}`}>
                <div className="rounded border-4 lg:max-h-[210px] overflow-hidden flex items-center justify-center">
                  <Image
                    src={car.fotos.fotos[0]?.url}
                    alt={car.titulo!}
                    width={385}
                    height={232}
                    placeholder="empty"
                  />
                </div>
                <h6 className="mt-3 text-white font-semibold">{car.titulo}</h6>
                <div
                  className={`mt-1 text-white font-semibold text-2xl text-[#45aede] ${
                    car.carroStatus === ("Vendido" || "VENDIDO") &&
                    "line-through"
                  }`}
                >
                  {car.preco}
                </div>
                <div className="mt-1 text-white text-sm">
                  Ano {car.ano} / {car.kilometragem}
                </div>
                <div className="mt-1 text-white text-sm">
                  Status: <strong>{car.carroStatus || "Disponível"}</strong>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </main>
  );
}
