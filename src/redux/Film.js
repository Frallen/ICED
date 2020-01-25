import { GetApi } from "../components/api/Api";

const GetFilms = "GetFilms";
const GetInfo = "GetInfo";
const GetYouTube = "GetYouTube";
const ClearAll="ClearAll"

let initialstate = {
  Films: [],
  Movie: [],
  Video: []
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
    case GetYouTube:
      return {
        ...state,
        Video: action.snap
      };
      case ClearAll:
        return{
          ...state,
          Video:[],
          Movie:[]
        }
    default:
      return state;
  }
};

export default FilmReducer;

export const GetDiscover = data => async dispatch => {
  let snap = await GetApi.Discover(data);
  dispatch({ type: GetFilms, snap });
};

export const GetMovie = id => async dispatch => {
  let snap = await GetApi.Movie(id);
  dispatch({ type: GetInfo, snap });
};

export const GetVideo = id => async dispatch => {
  let snap = await GetApi.Video(id);
  dispatch({ type: GetYouTube, snap });
};

export const Clear=()=>dispatch=>{
  dispatch({type:ClearAll})
}