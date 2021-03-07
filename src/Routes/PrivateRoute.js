import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const PrivateRoute = ({ component, ...rest }) => {
    let ComponentToRender = component;
    const isAuthenticated = useSelector(
        ({ RX_AUTH: { isAuthenticated } }) => isAuthenticated
    );

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <ComponentToRender {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export default withRouter(PrivateRoute);