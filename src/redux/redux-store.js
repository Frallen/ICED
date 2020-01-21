import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import FilmReducer from "./Film";

const reducers = combineReducers({
  Film: FilmReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
