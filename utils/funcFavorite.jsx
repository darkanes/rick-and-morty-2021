export const favVerify = (data, setFavorite, type) => {
  let dataArray = JSON.parse(localStorage.getItem(type)) || [];
  let dataFilter = dataArray.filter((e) => e.name === data.name);
  /* console.log(dataArray); */
  if (dataFilter.length === 1) {
    setFavorite(true);
  } else {
    setFavorite(false);
  }
};

export const guardar = (data, setFavorite, favorite, type) => {
  let dataArray = JSON.parse(localStorage.getItem(type)) || [];
  dataArray.push(data);
  localStorage.setItem(type, JSON.stringify(dataArray));
  /* console.log(JSON.parse(localStorage.getItem(type))); */
  setFavorite(!favorite);
};

export const eliminar = (data, setFavorite, favorite, type) => {
  let dataArray = JSON.parse(localStorage.getItem(type)) || [];
  let dataFilter = dataArray.filter((e) => e.name !== data.name);
  localStorage.setItem(type, JSON.stringify(dataFilter));
  setFavorite(!favorite);
  /*  console.log(JSON.parse(localStorage.getItem(type))); */
};
