import axios from "axios";

export function fetchArticles() {
  //return the actual action to do
  return function (dispatch) {
    axios
      .get("https://ws.med.tn/web/doctorInfos/?api_key=drmateri")
      .then(function (response) {
        console.log(response.data);
        dispatch({
          type: "FETCH_ARTICLES",
          payload: response.data, //Added articles
          fetched: true,
        });
      });
  };
}
