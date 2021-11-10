import { gql } from "@apollo/client";

export const GET_LOCATIONS = (page: number, busqueda: string) => {
  return gql`
    query {
      locations (page:${page}, filter:{name:"${busqueda}"}){
        info{
          count
          pages
          next
          prev
        }
        results {
          id
          name
          type
          created
          dimension
          residents {
            id
            name
            image
          }
        }
      }
    }
  `;
};

export const GET_LOCATIONS_BY_IDS = (id) => {
  return gql`
  query {
    locationsByIds(ids: ${id}) {
       id
       name
   type
   dimension
   residents{
    id
    name
    image
    species
    gender
   }
   created
     }
   }`
}
