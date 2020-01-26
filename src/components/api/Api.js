import * as axios from "axios";

let api_key = "f100f05c9499d0ca30c1d7b28775607a";

let baseURL = "https://api.themoviedb.org/3/";
let defpop = "popularity.desc";
export const GetApi = {
  //получить все фильмы
  Discover(data) {
    return axios
      .get(
        `
    ${baseURL}discover/movie?api_key=${api_key}&language=en-US&sort_by=${
          data && data.Sort ? data.Sort : defpop
        }&primary_release_year=${
          data && data.Year ? data.Year : null
        }&with_genres=${data && data.Genres ? data.Genres : 28}&page=${
          data && data.num ? data.num : 1
        }`
      )
      .then(response => response.data);
  },
  //инфа о фильме
  Movie(id) {
    return axios
      .get(`${baseURL}movie/${id}?api_key=${api_key}`)
      .then(response => response.data);
  },
  //трейлер фильма
  Video(id) {
    return axios
      .get(`${baseURL}movie/${id}/videos?api_key=${api_key}&language=en-US`)
      .then(response => response.data);
  },
  //Актеры в фильме
  Cast(id) {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}
      `
      )
      .then(response => response.data);
  },
  //Страница актера
  Actor(id) {
    return axios
      .get(`${baseURL}person/${id}?api_key=${api_key}`)
      .then(response => response.data);
  },
  //Актер в фильмах
  ActorIN(id) {
    return axios
      .get(
        `${baseURL}person/${id}/movie_credits?api_key=${api_key}&language=en-US`
      )
      .then(response => response.data);
  },
  People(num) {
    return axios
      .get(
        `${baseURL}person/popular?api_key=${api_key}&language=en-US&page=${
          num ? num : 1
        }`
      )
      .then(response => response.data);
  }
};
