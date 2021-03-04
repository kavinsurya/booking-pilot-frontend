import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { React } from "react";

import {HomePage  } from "./generalComponents/HomePage/HomePage";



export function Routes() {
    

    return (
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={HomePage}></Route>
            
    
            </Switch>
          </Router>
        </div>
      );
    };
