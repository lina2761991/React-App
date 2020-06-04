import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/reducers";
import App from "./App";
import { fetchArticles } from "./actions/fetchArticles";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchServices } from "./actions/fetchServices";

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(fetchArticles());
store.dispatch(fetchServices());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
