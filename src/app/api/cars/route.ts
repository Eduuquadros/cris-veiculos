import { NextResponse } from "next/server";
import client from "../../../config/apollo-client";
import { gql } from "@apollo/client";

export async function GET() {
  const { data } = await client.query({
    query: gql`
      query Carros {
        carros {
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
