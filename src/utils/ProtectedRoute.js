import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isLogged, redirect, ...rest }) => {
  return (
    <Route exact {...rest} render={(props) => (
      isLogged
        ? <Component {...props} />
        : <Redirect to={redirect} />
    )}
    />
  );
}

export default ProtectedRoute;
