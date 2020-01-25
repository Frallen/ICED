import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import FilmReducer from "./Film";
import CastReducer from "./Cast";

const reducers = combineReducers({
  Film: FilmReducer,
  Cast: CastReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
