import * as axios from "axios";


let api_key = "f100f05c9499d0ca30c1d7b28775607a";

let baseURL = "https://api.themoviedb.org/3/";

export const GetApi = {
  Discover(num) {
    return axios.get(
        `
    ${baseURL}discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&page=1`
      )
      .then(response => response.data.results);
  },
  Movie(id) {
    return axios.get(`${baseURL}movie/${id}?api_key=${api_key}`).then(response => response.data);
  }
};
