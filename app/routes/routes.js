import React from "react";
import { Route, Switch } from "react-router";
// import LoginPage from "src/page/login";
import Login from "../pages/login";

// import Error404 from 'src/page/error404'
import PublicLayout from "../layouts/public-layout";
import PrivateLayout from "../layouts/private-layout";

const routeslist = [
  {
    layout: PublicLayout,
    subRoutes: [{ path: "/login", component: Login }]
  },
  {
    layout: PrivateLayout,
    subRoutes: [{ exact: true, path: "/", component: null }]
  }
];

const routes = (
  <Switch>
    {routeslist.map((route, i) => (
      <Route
        key={i}
        exact={route.subRoutes.some(r => r.exact)}
        path={route.subRoutes.map(r => r.path)}
      >
        <route.layout>
          {route.subRoutes.map((subRoute, i) => (
            <Route key={i} {...subRoute} />
          ))}
        </route.layout>
      </Route>
    ))}
    <Route path="*" component={null} />
  </Switch>
);
export default routes;
