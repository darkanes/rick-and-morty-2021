import { gql } from "@apollo/client";

export const GET_CHARACTERS = (page: number, busqueda: string) => {
  return gql`
    query {
      characters(page:${page}, filter:{name:"${busqueda}"}) {
        info{
          count
          pages
          next
          prev
        }
        results {
          id
          name
          species
          image
          gender
          type
        }
      }
    }
  `;
};

export const GET_CHARACTERS_BY_ID = (id) => {
  return gql`
    query {
      charactersByIds(ids: ${id}) {
        id
        name
        status
        species
        type
        gender
        image
        created
        origin {
          name
          dimension
          type
        }
        location{ 
          name 
          dimension
          type
          }
      }
    }
  `;
};
