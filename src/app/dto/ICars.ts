export interface ICar {
  ano?: string;
  acessorios?: string;
  titulo?: string;
  preco: string;
  id?: string;
  kilometragem?: string;
  url?: string;
  carroStatus?: string;
  oportunidade?: string;
  fotos: {
    fotos: {
      url: string;
    }[];
  };
}

export interface ICarsResponse {
  carros: ICar[];
}
