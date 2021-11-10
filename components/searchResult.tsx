import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_CHARACTERS } from "../apollo/queries/characters";
import { GET_LOCATIONS } from "../apollo/queries/locations";
import { GET_EPISODES } from "../apollo/queries/episodes";
import "bootswatch/dist/vapor/bootstrap.min.css";
import CharacterCard from "./characterCard";
import LocationCard from "./locationCard";
import EpisodeCard from "./episodeCard";
const SearchResult = ({ tipoBusqueda, busqueda, page, setPage }) => {
  const query = () => {
    switch (tipoBusqueda) {
      case "Episodes":
        return GET_EPISODES(page, busqueda);
      case "Characters":
        return GET_CHARACTERS(page, busqueda);
      case "Locations":
        return GET_LOCATIONS(page, busqueda);
      default:
        break;
    }
  };

  const { data } = useQuery(query());

  if (!data) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  const mockData = data;
  const characterData = mockData.characters || {
    info: { prev: null, next: null },
  };
  const episodeData = mockData.episodes || { info: { prev: null, next: null } };
  const locationData = mockData.locations || {
    info: { prev: null, next: null },
  };

  const handlePage = (action) => {
    switch (action) {
      case "next":
        setPage(page + 1);
        break;

      case "prev":
        setPage(page - 1);
      default:
        break;
    }
  };
  const card = () => {
    switch (tipoBusqueda) {
      case "Characters":
        return mockData.characters.results.map((e, index) => (
          <div key={index} className="col-md-4">
            <CharacterCard data={e} />
          </div>
        ));
      case "Episodes":
        return mockData.episodes.results.map((e, index) => (
          <div key={index} className="col-md-4">
            <EpisodeCard data={e} />
          </div>
        ));
      case "Locations":
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
    <div className="row">
      {card()}

      <div
        className="btn-group fixed-bottom"
        role="group"
        aria-label="Basic example"
      >
        {characterData.info.prev === null ? null : (
          <button className="btn btn-info" onClick={() => handlePage("prev")}>
            <span>prev</span>
          </button>
        )}
        {characterData.info.next === null ? null : (
          <button
            className="btn btn-success"
            onClick={() => handlePage("next")}
          >
            next
          </button>
        )}

        {episodeData.info.prev === null ? null : (
          <button className="btn btn-info" onClick={() => handlePage("prev")}>
            <span>prev</span>
          </button>
        )}
        {episodeData.info.next === null ? null : (
          <button
            className="btn btn-success"
            onClick={() => handlePage("next")}
          >
            next
          </button>
        )}

        {locationData.info.prev === null ? null : (
          <button className="btn btn-info" onClick={() => handlePage("prev")}>
            <span>prev</span>
          </button>
        )}
        {locationData.info.next === null ? null : (
          <button
            className="btn btn-success"
            onClick={() => handlePage("next")}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
