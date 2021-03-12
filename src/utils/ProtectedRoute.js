import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isLogged, path, redirect, ...rest }) => {
  return (
    <Route exact path={path} {...rest} render={(props) => (
      isLogged
        ? <Component {...props} />
        : <Redirect to={redirect} />
    )}
    />
  );
}

export default ProtectedRoute;
