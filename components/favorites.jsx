import { useState } from "react";
import CharacterCard from "./characterCard";
import EpisodeCard from "./episodeCard";
import LocationCard from "./locationCard";

const Favorites = () => {
  let characterFav = JSON.parse(localStorage.getItem("character")) || [];
  let episodeFav = JSON.parse(localStorage.getItem("episode")) || [];
  let locationFav = JSON.parse(localStorage.getItem("location")) || [];

  return (
    <div>
      <h1 className="mt-4 fw-bold">❤Your Favorites❤</h1>
      <h3 className="text-decoration-underline">Characters</h3>
      <div className="row justify-content-center">
        {characterFav.length === 0 ? (
          <div className="col-md-4 col-12 mt-3">
            <p className="bg-info rounded-pill">
            Still dont have favorites characters
            </p>
          </div>
        ) : (
          characterFav.map((e, index) => (
            <div key={index} className="col-md-4">
              <CharacterCard data={e} />
            </div>
          ))
        )}

        <h3 className="text-decoration-underline">Episodes</h3>
        {episodeFav.length === 0 ? (
          <div className="col-md-4 col-12 mt-3">
            <p className="bg-info rounded-pill">
            Still dont have favorites episodes
            </p>
          </div>
        ) : (
          episodeFav.map((e, index) => (
            <div key={index} className="col-md-4">
              <EpisodeCard data={e} />
            </div>
          ))
        )}
        <h3 className="text-decoration-underline">Locations</h3>
        {locationFav.length === 0 ? (
          <div className="col-md-4 col-12 mt-3">
            <p className="bg-info rounded-pill">
            Still dont have favorites locations
            </p>
          </div>
        ) : (
          locationFav.map((e, index) => (
            <div key={index} className="col-md-4">
              <LocationCard data={e} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
