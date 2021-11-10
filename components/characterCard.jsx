import { useEffect, useState } from "react";
import { favVerify, guardar, eliminar } from "../utils/funcFavorite";
import Link from "next/link";

const CharacterCard = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    favVerify(data, setFavorite, "character");
  });

  return (
    <div className="card border-success mb-2 mt-2">
      <div className="card-title mt-3 ">
        <h4>{data.name}</h4>
      </div>
      <div className="card-body ">
        <img src={data.image} alt="" className="img-fluid" />

        <h4>
          Specie:
          <small className="text-warning"> {data.species}</small>
        </h4>
        <h4>
          Genre:
          <small className="text-warning"> {data.gender}</small>
        </h4>
      </div>
      <div className="row">
        <div className="d-flex ">
          <Link href={`/characters/${data.id}`}>
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
              onClick={() => eliminar(data, setFavorite, favorite, "character")}
            >
              ❤
            </button>
          ) : (
            <button
              className="btn btn-secondary py-3 col-2"
              onClick={() => guardar(data, setFavorite, favorite, "character")}
            >
              ♡
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
