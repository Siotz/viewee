import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserProvider from "./contexts/UserContext";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            <Route exact path="/" component={MainPage} />
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
