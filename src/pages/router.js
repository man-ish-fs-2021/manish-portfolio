import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home, About, Contact, Work } from "./";
import { CommonFooterAndHome } from "../components";

const Router = () => {
  return (
    <Switch>
      <Redirect from="/manish-portfolio#/" to="/" />
      <Route exact path="/">
        <Home />
      </Route>
      <CommonFooterAndHome>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        {/* <Route path="*" component={<>not available</>} /> */}
      </CommonFooterAndHome>
    </Switch>
  );
};

export default Router;
