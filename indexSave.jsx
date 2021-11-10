import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_CHARACTERS } from "../apollo/queries/characters";
import { GET_LOCATIONS } from "../apollo/queries/locations";
import { GET_EPISODES } from "../apollo/queries/episodes";
import "bootswatch/dist/vapor/bootstrap.min.css";
import CharacterCard from "../components/characterCard";
import LocationCard from "../components/locationCard";
import EpisodeCard from "../components/episodeCard";
export default function Home() {
  const [page, setPage] = useState < number > 1;
  const [busqueda, setBusqueda] = useState("episodes");
  const query = () => {
    switch (busqueda) {
      case "episodes":
        return GET_EPISODES(page);
      case "characters":
        return GET_CHARACTERS(page);
      case "locations":
        return GET_LOCATIONS(page);
      default:
        break;
    }
  };

  const { data } = useQuery(query());

  if (!data) {
    return "loading";
  }
  console.log(data);

  const mockData = data;
  console.log(mockData);
  const card = () => {
    switch (busqueda) {
      case "characters":
        return mockData.characters.results.map((e, index) => (
          <div key={index} className="col-md-4">
            <CharacterCard data={e} />
          </div>
        ));
      case "episodes":
        return mockData.episodes.results.map((e, index) => (
          <div key={index} className="col-md-4">
            <EpisodeCard data={e} />
          </div>
        ));
      case "locations":
        return mockData.locations.results.map((e, index) => (
          <div key={index} className="col-md-4">
            <LocationCard data={e} />
          </div>
        ));
      default:
        break;
    }
  };
  return (
    <div
      className="container text-center
  "
    >
      <div className="form-group">
        <label className="form-label mt-4">Example select</label>
        <select
          className="form-select"
          id="exampleSelect1"
          onChange={(e) => setBusqueda(e.target.value)}
        >
          <option>Characters</option>
          <option>Episodes</option>
          <option>Locations</option>
        </select>
      </div>
      <div className="form-group"></div>
      <div className="row">{card()}</div>
    </div>
  );
}
