import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { React } from "react";

import {HomePage  } from "./generalComponents/HomePage/HomePage";
import {UserLogin  } from "./generalComponents/login/UserLogin";
import {AgentLogin  } from "./generalComponents/login/AgentLogin";
import {AdminLogin  } from "./generalComponents/login/AdminLogin";

export function Routes() {
    

    return (
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/login" exact component={UserLogin}></Route>
              <Route path="/login/agent" exact component={AgentLogin}></Route>
              <Route path="/login/@admin" exact component={AdminLogin}></Route>

            
    
            </Switch>
          </Router>
        </div>
      );
    };
