import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:user_id" component={UserPage} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
