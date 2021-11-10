import { useEffect, useState } from "react";
import { favVerify, guardar, eliminar } from "../utils/funcFavorite";
import Link from "next/link";
const LocationCard = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  useEffect(() => {
    favVerify(data, setFavorite, "location");
  });
  return (
    <div className="card border-success mb-2 mt-2">
      <div className="card-title mt-3 ">
        <h4>{data.name}</h4>
      </div>
      <div className="card-body ">
        <h4>
          Type:
          <small className="text-warning"> {data.type}</small>
        </h4>
        <h4>
          Dimension:
          <small className="text-warning"> {data.dimension}</small>
        </h4>
        <h4>
          Residents:
          <small className="text-warning"> {data.residents.length}</small>
        </h4>
      </div>
      <div className="row">
        <div className="d-flex ">
          <Link href={`/locations/${data.id}`}> 
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
              onClick={() => eliminar(data, setFavorite, favorite, "location")}
            >
              ❤
            </button>
          ) : (
            <button
              className="btn btn-secondary py-3 col-2"
              onClick={() => guardar(data, setFavorite, favorite, "location")}
            >
              ♡
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
