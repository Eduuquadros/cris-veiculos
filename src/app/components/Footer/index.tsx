import Image from "next/image";
import Fachada from "./fachada.jpg";
import logoNeo from "../Header/logoNeo.png";

export default function Footer() {
  return (
    <div className="mb-10 mt-24">
      <hr />
      <div className="my-10">
        <div className="text-white text-center text-2xl my-6">Neo Protege</div>
        <p className="text-white text-center">
          Temos parceria com a neo protege, a proteção mais completa do mercado,
          valor que cabe exatamente em seu orçamento. Sem análise de perfil,
          consulta SPC SERASA, sem restrição de veículo.
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a href="https://neoprotege.com.br/" target="_blank">
            <Image src={logoNeo} width={250} alt="Logo neo" />
          </a>
        </div>
      </div>
      <hr />
      <div id="ondeEstamos" className="text-white text-center text-2xl my-10">
        Onde estamos
      </div>
      <div className="flex flex-col lg:flex-row mb-20">
        <Image src={Fachada} height={350} alt="Cris Veiculos" />
        <iframe
          className="flex-1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.432832716857!2d-51.070197988022485!3d-29.995725728915975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951975ba671e25e1%3A0x9167213a50f77e5!2sAv.%20Pres.%20Get%C3%BAlio%20Vargas%2C%203273%20-%20Bela%20Vista%2C%20Alvorada%20-%20RS%2C%2094810-002!5e0!3m2!1spt-BR!2sbr!4v1701367097427!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
