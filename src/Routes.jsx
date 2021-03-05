import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { React } from "react";
//Home page
import { HomePage } from "./generalComponents/HomePage/HomePage";

//User , Agent and Admin login Components
import { UserLogin } from "./generalComponents/login/UserLogin";
import { AgentLogin } from "./generalComponents/login/AgentLogin";
import { AdminLogin } from "./generalComponents/login/AdminLogin";

//User and Agent Register Components
import { UserRegister } from "./generalComponents/register/UserRegister";
import { AgentRegister } from "./generalComponents/register/AgentRegister";

import { Movies } from "./generalComponents/movies/Movies";


export function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/login" exact component={UserLogin}></Route>
          <Route path="/login/agent" exact component={AgentLogin}></Route>
          <Route path="/login/@admin" exact component={AdminLogin}></Route>
          <Route path="/register" exact component={UserRegister}></Route>
          <Route path="/register/agent" exact component={AgentRegister}></Route>
          <Route path="/movies" exact component={Movies}></Route>
          
        </Switch>
      </Router>
    </div>
  );
}
