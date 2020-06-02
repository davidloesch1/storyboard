import React, { Components } from "react";
import "../css/App.css";
import Home from "./Home";
import PlotModalForm from "./PlotModalForm";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import StoryList from "./StoryList";
import StoryDetails from "./StoryDetails";
import UserDashboard from "./UserDashboard";
import Header from "./Header";
import AuthTokenProvider from './AuthToken'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthTokenProvider>
        <PlotModalForm />
        <LoginModal />
        <SignupModal />
        <Header />
        <Router>
          <Switch>
            <Route path="/stories/">
              <StoryList />
            </Route>
            <Route
              path="/story/details/:handle"
              component={StoryDetails}
            />
            <Route path="/user/dashboard">
              <UserDashboard />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthTokenProvider>
    </>
  );
}


export default App;

