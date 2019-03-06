import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import UserProvider from "./contexts/UserContext";
// import LoginModal from "./pages/LoginModal";
import "./App.css";
import DetailPage from "./pages/DetailPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/drama/:dramaId" component={DetailPage} />
            {/* <Route exact path="/review/list" component={리뷰리스트페이지} /> */}
            {/* <Route exact path="/review/detail/:reviewId" component={리뷰상세페이지} /> */}
            {/* <Route exact path="/review/posting" component={리뷰작성페이지} /> */}
            {/* <Route exact path="/users/:userId" component={유저페이지} /> */}
            {/* <Route path="/login" component={LoginModal} /> */}
          </>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default App;
