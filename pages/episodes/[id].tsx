import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import "bootswatch/dist/vapor/bootstrap.min.css";
import { GET_EPISODES_BY_ID } from "../../apollo/queries/episodes";
import CharacterCard from "../../components/characterCard";

const EpisodeById = () => {
  const route = useRouter();
  const id = route.query.id;
  const { data } = useQuery(GET_EPISODES_BY_ID(id));
  if (!data) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  }
  const episodeData = data.episodesByIds[0];
  console.log(episodeData);
  return (
    <div className="container justify-content-center text-center">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-4">Episode: {episodeData.episode} </h1>
        </div>
        <div className="col-6 mt-4">
          <h2>Name : {episodeData.name}</h2>{" "}
        </div>
        <div className="col-6 mt-4">
          <h2>Air Date : {episodeData.air_date}</h2>{" "}
        </div>
        <div className="col-12 mt-5">
          <h1 className="bg-primary rounded-pill">Characters</h1>
        </div>
        {episodeData.characters.map((e, index) => (
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

export default EpisodeById;
