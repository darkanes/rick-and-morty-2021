import { useEffect, useState } from "react";
import { favVerify, guardar, eliminar } from "../utils/funcFavorite";
import Link from "next/link";
const EpisodeCard = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    favVerify(data, setFavorite, "episode");
  });
  return (
    <div className="card border-success mb-2 mt-2">
      <div className="card-title mt-3 ">
        <h4>
          {data.name}
          <br />
          <small className="text-muted">({data.episode})</small>
        </h4>
      </div>
      <div className="card-body ">
        <h4>
          Air Date:
          <small className="text-warning"> {data.air_date}</small>
        </h4>
        <h4>
          Characters:
          <small className="text-warning"> {data.characters.length}</small>
        </h4>
      </div>
      <div className="row">
        <div className="d-flex ">
          <Link href={`episodes/${data.id}`}> 
          <button
            type="button-fluid font-weight-bold"
            className="btn btn-primary col-10"
          >
            <h4 className="mt-2">See Details</h4>
          </button>
          </Link>
          {favorite ? (
            <button
              className="btn btn-secondary py-3 col-2"
              onClick={() => eliminar(data, setFavorite, favorite, "episode")}
            >
              ❤
            </button>
          ) : (
            <button
              className="btn btn-secondary py-3 col-2"
              onClick={() => guardar(data, setFavorite, favorite, "episode")}
            >
              ♡
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
