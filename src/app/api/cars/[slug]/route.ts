import { NextRequest, NextResponse } from "next/server";
import client from "../../../../config/apollo-client";
import { gql } from "@apollo/client";

export const revalidate = 0;

export async function GET(
  req: NextRequest,
  context: { params: { slug: string } }
) {
  const { data } = await client.query({
    query: gql`
      query MyQuery($where: CarroWhereUniqueInput!) {
        carro(where: $where) {
          acessorios
          ano
          fotos {
            ... on Fotos {
              id
              fotos {
                url
              }
            }
          }
          kilometragem
          preco
          titulo
          url
          carroStatus
        }
      }
    `,
    variables: {
      where: { url: context.params.slug },
    },
  });

  return NextResponse.json(data);
}
