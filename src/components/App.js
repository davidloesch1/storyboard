import React from "react";
import "../css/App.css";
import Home from "./Home";
import PlotModalForm from "./PlotModalForm";
import AddModal from './AddModal'
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import StoryList from "./StoryList";
import StoryDetails from "./StoryDetails";
import UserDashboard from "./UserDashboard";
import AuthTokenProvider from './AuthToken'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthTokenProvider>
        <PlotModalForm />
        <LoginModal />
        <SignupModal />
        <Router>
          <Switch>
            <Route path="/stories/">
              <StoryList />
            </Route>
            <Route path="/story/details/:handle" component={StoryDetails} />
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

