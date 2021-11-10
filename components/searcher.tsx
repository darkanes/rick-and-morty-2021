const Searcher = ({ tipoBusqueda, setTipoBusqueda, setBusqueda }) => {
  const handleSearch = (value) => {
    if (value.length >= 3) {
      setBusqueda(value);
    } else if (value.length === 0) {
      setBusqueda("");
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-5 col-md-2   ml-2">
        <div className="form-group">
          <label className="form-label mt-3">Type Of Search</label>
          <select
            className="form-select"
            id="exampleSelect1"
            value={tipoBusqueda}
            onChange={(e) => setTipoBusqueda(e.target.value)}
          >
            <option>Characters</option>
            <option>Episodes</option>
            <option>Locations</option>
          </select>
        </div>
      </div>
      <div
        className="col-md-6 
"
      >
        <label className="col-form-label mt-2">Search</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Ingrese un nombre"
          id="inputDefault"
        />
      </div>
    </div>
  );
};

export default Searcher;
