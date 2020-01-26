import { GetApi } from "../components/api/Api";

const Cast = "Cast";
const Actor = "Actor";
const InFilms = "InFilms";
const People = "People";

let initialState = {
  Cast: [],
  Actor: [],
  InFilms: [],
  People: []
};

let CastReducer = (state = initialState, action) => {
  switch (action.type) {
    case Cast:
      return {
        ...state,
        Cast: action.snap
      };
    case Actor:
      return {
        ...state,
        Actor: action.snap
      };
    case InFilms:
      return {
        ...state,
        InFilms: action.snap
      };
    case People:
      return {
        ...state,
        People: action.snap
      };
    default:
      return state;
  }
};
export default CastReducer;
//взять актерский состав фильма
export const GetCast = id => async dispatch => {
  let snap = await GetApi.Cast(id);
  dispatch({ type: Cast, snap });
};
//взять основную информацию об актере
export const GetActor = id => async dispatch => {
  let snap = await GetApi.Actor(id);
  dispatch({ type: Actor, snap });
};

//взять информацию в каких фильмах снимался актер
export const GetActorInFilms = id => async dispatch => {
  let snap = await GetApi.ActorIN(id);
  dispatch({ type: InFilms, snap });
};

export const GetTopPeople = num => async dispatch => {
  let snap = await GetApi.People(num);
  dispatch({ type: People, snap });
};
