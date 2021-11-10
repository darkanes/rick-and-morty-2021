import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import "bootswatch/dist/vapor/bootstrap.min.css";
import { GET_LOCATIONS_BY_IDS } from "../../apollo/queries/locations";
import CharacterCard from "../../components/characterCard";

const LocationById = () => {
  const route = useRouter();
  const id = route.query.id;
  const { data } = useQuery(GET_LOCATIONS_BY_IDS(id));
  if (!data) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  const locationData = data.locationsByIds[0];
  console.log(locationData);
  return (
    <div className="container justify-content-center text-center">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-4">Name: {locationData.name} </h1>
        </div>
        <div className="col-6 mt-4">
          <h2>Type : {locationData.type}</h2>
        </div>
        <div className="col-6 mt-4">
          <h2>Dimension : {locationData.dimension}</h2>
        </div>
        <div className="col-12 mt-5">
          <h1 className="bg-primary rounded-pill">Residents</h1>
        </div>
        {locationData.residents.map((e, index) => (
          <div key={index} className="col-md-4">
            <CharacterCard data={e} />
          </div>
        ))}
      </div>

      <Link href="/">
        <button className="btn btn-primary d-flex fixed-top m-3">
          ◀️ Go Back
        </button>
      </Link>
    </div>
  );
};

export default LocationById;
