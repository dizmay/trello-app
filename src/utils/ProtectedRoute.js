import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isLogged, exact, path, redirect, ...rest }) => {
  return (
    <Route exact={exact} path={path} {...rest} render={(props) => (
      isLogged
        ? <Component {...props} />
        : <Redirect to={redirect} />
    )}
    />
  );
}

export default ProtectedRoute;
