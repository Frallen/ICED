import { GetApi } from "../components/api/Api";

const GetFilms = "GetFilms";
const GetInfo = "GetInfo";
let initialstate = {
  Films: [],
  Movie: []
};

const FilmReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GetFilms:
      return {
        ...state,
        Films: action.snap
      };
    case GetInfo:
      return {
        ...state,
        Movie: action.snap
      };
    default:
      return state;
  }
};

export default FilmReducer;

export const GetDiscover = num => async dispatch => {
  let snap = await GetApi.Discover(num);
  dispatch({ type: GetFilms, snap });
};

export const GetMovie = id => async dispatch => {
  let snap = await GetApi.Movie(id);
  dispatch({ type: GetInfo, snap });
};
