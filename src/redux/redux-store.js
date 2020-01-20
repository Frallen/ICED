import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import FilmReducer from "./Film";

const reducers = combineReducers({
    Film:FilmReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
