import React from "react"
import ReactDOM from "react-dom"
import Home from "./Screens/Home"
import FullInfo from "./Screens/FullInfo"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import myStore from "./Redux/Store"
import { BrowserRouter, Route } from "react-router-dom"

ReactDOM.render(
  <Provider store={myStore}>
    <React.StrictMode>
      <BrowserRouter>
        <Route component={Home} path="/" exact />
        <Route component={FullInfo} path="/anime/:id" />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
