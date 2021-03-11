import React from "react";
import { useSelector } from "react-redux";
import { Route, Router, Switch } from "react-router";
import RootFooter from "../Components/Footers/RootFooter";
import ColorSelector from "../Components/Modals/ColorSelector";
import NavBar from "../Components/Navs/NavBar";
import ScrollIntoView from "../Hooks/ScrollIntoView ";
import AccountLogin from "../Pages/AccountLogin";
import Admin from "../Pages/Admin";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Wishlist from "../Pages/Wishlist";
import { default as history } from "./History";

function RouteWrapper() {
    const {
        RX_AUTH: { role, isAuthenticated },
    } = useSelector((state) => state);

    return (
        <Router history={history}>
            <Switch>
                {role === "ADMIN" && isAuthenticated && (
                    <ScrollIntoView>
                        <Route path="/" component={Admin} />
                        <Route exact path="/selector" component={ColorSelector} />
                    </ScrollIntoView>
                )}
                {role === "USER" && (
                    <ScrollIntoView>
                        <NavBar />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/account-login" component={AccountLogin} />
                        <Route exact path="/wishlist" component={Wishlist} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/products/:name" component={Product} />
                        <RootFooter />
                    </ScrollIntoView>
                )}
            </Switch>
        </Router>
    );
}

export default RouteWrapper;
