import * as axios from "axios";

let api_key = "f100f05c9499d0ca30c1d7b28775607a";

let baseURL = "https://api.themoviedb.org/3/";
let defpop = "popularity.desc";
export const GetApi = {
  Discover(data) {
    return axios
      .get(
        `
    ${baseURL}discover/movie?api_key=${api_key}&language=en-US&sort_by=${
          data&& data.Sort ? data.Sort : defpop
        }&page=${data&&data.num ? data.num : 1}`
      )
      .then(response => response.data);
  },
  Movie(id) {
    return axios
      .get(`${baseURL}movie/${id}?api_key=${api_key}`)
      .then(response => response.data);
  }
};
