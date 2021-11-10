import { gql } from "@apollo/client";

export const GET_EPISODES = (page: number, busqueda: string) => {
  return gql`
  query{
    episodes(page:${page}, filter:{name:"${busqueda}"}){
      info{
        count
        pages
        next
        prev
      }
      results{
        id,
        name,
        created,
        episode,
        air_date,
        characters{
          id,
          name,
          image
        }
      }
    }
  }
  `;
};

export const GET_EPISODES_BY_ID = (id) =>{
  return gql`query {
    episodesByIds(ids: ${id}) {
      id
      name
  air_date
  episode
  characters{
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