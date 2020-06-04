import { combineReducers } from "redux";

//reducers
import fetchServices from "./fetch_services";
import fetchArticles from "./fetch_articles";

//combine reducers
//remember you need to export the reducers to use them
const reducers = combineReducers({
  FETCH_ARTICLES: fetchArticles,
  FETCH_SERVICES: fetchServices,
});

export default reducers;
