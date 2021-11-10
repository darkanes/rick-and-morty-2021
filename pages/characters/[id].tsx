import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import "bootswatch/dist/vapor/bootstrap.min.css";
import { GET_CHARACTERS_BY_ID } from "../../apollo/queries/characters";

const CharacterById = () => {
  const route = useRouter();
  const id = route.query.id;
  const { data } = useQuery(GET_CHARACTERS_BY_ID(id));
  if (!data) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  const characterData = data.charactersByIds[0];
  console.log(characterData);
  return (
    <div className="container justify-content-center text-center">
      <h1 className="mt-3 mb-3 fw-bold">{characterData.name}</h1>
      <div className="col-12  ">
        <img
          src={characterData.image}
          className=" img-fluid rounded-pill  bg-warning p-3"
        />
        <p className="text-muted">
          (Created: {characterData.created.substr(0, 10)})
        </p>
      </div>
      <div className="col-4 offset-4  text-decoration-underline  rounded-pill mt-4 mb-3 ">
        <h1 className=" mt-3 p-1 bg-primary rounded-pill pb-2">
          Character Info
        </h1>
      </div>
      <div className="row mt-5   ">
        <div className="col-4   ">
          <h2 className="fw-bold">Status</h2>
          <p className="fw-bolder text-success">{characterData.status}</p>
        </div>
        <div className="col-4 ">
          <h2 className="fw-bold">Specie</h2>
          <p className="fw-bolder text-success">{characterData.species}</p>
        </div>
        <div className="col-4   ">
          <h2 className="fw-bold">Gender </h2>
          <p className="fw-bolder text-success">{characterData.gender}</p>
        </div>
      </div>
      <div className="col-4 offset-4  text-decoration-underline  rounded-pill mt-4 mb-3 ">
        <h1 className=" mt-3 p-1 bg-primary rounded-pill pb-2">
          Origin Location Info
        </h1>
      </div>
      <div className="row mt-5 ">
        <div className="col-4  ">
          <h2 className="fw-bold">Name</h2>
          <p className="fw-bolder text-success">{characterData.origin.name}</p>
        </div>
        <div className="col-4   ">
          <h2 className="fw-bold">Dimension</h2>
          <p className="fw-bolder text-success">
            {characterData.origin.dimension}
          </p>
        </div>
        <div className="col-4   ">
          <h2 className="fw-bold">Type</h2>
          <p className="fw-bolder text-success">{characterData.origin.type}</p>
        </div>
      </div>
      <div className="col-4 offset-4  text-decoration-underline  rounded-pill mt-4 mb-3 ">
        <h1 className=" mt-3 p-1 bg-primary  rounded-pill pb-2">
          Last Location Info
        </h1>
      </div>
      <div className="row mt-5 mb-3 ">
        <div className="col-4  ">
          <h2 className="fw-bold">Name</h2>
          <p className="fw-bolder text-success">
            {characterData.location.name}
          </p>
        </div>
        <div className="col-4   ">
          <h2 className="fw-bold">Dimension</h2>
          <p className="fw-bolder text-success">
            {characterData.location.dimension}
          </p>
        </div>
        <div className="col-4   ">
          <h2 className="fw-bold">Type</h2>
          <p className="fw-bolder text-success">
            {characterData.location.type}
          </p>
        </div>
      </div>
      <Link href="/">
        <button className="btn btn-primary d-flex fixed-top m-3">
          ◀️ Go Back
        </button>
      </Link>
    </div>
  );
};

export default CharacterById;
