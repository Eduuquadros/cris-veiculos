import { NextResponse } from "next/server";
import client from "../../../config/apollo-client";
import { gql } from "@apollo/client";

export const revalidate = 0;

export async function GET() {
  const { data } = await client.query({
    query: gql`
      query Carros {
        carros(last: 50) {
          url
          acessorios
          ano
          createdAt
          id
          kilometragem
          preco
          publishedAt
          titulo
          updatedAt
          carroStatus
          fotos {
            ... on Fotos {
              id
              stage
              fotos {
                url
              }
            }
          }
        }
      }
    `,
  });

  return NextResponse.json(data);
}
