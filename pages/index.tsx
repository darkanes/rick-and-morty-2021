import { useEffect, useState } from "react";
import SearchResult from "../components/searchResult";
import Searcher from "../components/searcher";
import Favorites from "../components/favorites";
import "bootswatch/dist/vapor/bootstrap.min.css";

export default function Home() {
  const [tipoBusqueda, setTipoBusqueda] = useState("Characters");
  const [busqueda, setBusqueda] = useState("");
  const [hadFavorite, setHadFavorite] = useState(false);
  const [page, setPage] = useState<number>(1);

  const mostrarFav = () => {
    const favcharacter = JSON.parse(localStorage.getItem("character")) || [];
    const favepisode = JSON.parse(localStorage.getItem("episode")) || [];
    const favlocation = JSON.parse(localStorage.getItem("location")) || [];
    if (
      favcharacter.length !== 0 ||
      favlocation.length !== 0 ||
      favepisode.length !== 0
    ) {
      setHadFavorite(true);
      return;
    } else {
      setHadFavorite(false);
    }
  };

  useEffect(() => {
    mostrarFav();
  });
  useEffect(() => {
    setPage(1);
  }, [tipoBusqueda, busqueda]);
  useEffect(() => {
    setBusqueda("");
  }, [tipoBusqueda]);
  return (
    <div
      className="container text-center
  "
    >
      <div className="row justify-content-center  ">
        <Searcher
          tipoBusqueda={tipoBusqueda}
          setTipoBusqueda={setTipoBusqueda}
          setBusqueda={setBusqueda}
        />

        {hadFavorite && busqueda.length < 3 ? (
          <div className="mt-2">
            <Favorites />
          </div>
        ) : (
          <div className="mt-3">
            <SearchResult
              tipoBusqueda={tipoBusqueda}
              busqueda={busqueda}
              page={page}
              setPage={setPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
