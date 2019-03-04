import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserProvider from "./contexts/UserContext";
import LoginModal from "./pages/LoginModal";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LoginModal} />
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
