import React from "react";
import Logo from "../Logo/Logo";
import LinkSimple from "./LinkSimple";
import LinkWithModal from "./LinkWithModal";
import NavSearchBox from "./NavSearchBox";

function BottomNav() {
    const navText = [{ name: "new Arrivals", path: "" }, { name: "3 Stripe Life", path: "" }];

    const main_navigation = [
        { name: "Men", path: "/Men" },
        { name: "Women", path: "/Women" },
        { name: "kids", path: "/kids" }

    ];


    return (
        <div className="bottom_nav">
            <Logo></Logo>

            <div className="bottom_nav_navigation">
                {main_navigation.map((t, i) => (
                    <LinkWithModal key={i} name={t.name} path={t.path}></LinkWithModal>
                ))}

                {navText.map((t, i) => (
                    <LinkSimple key={i} name={t.name} ></LinkSimple>
                ))}
            </div>
            <NavSearchBox></NavSearchBox>
        </div>
    );
}

export default BottomNav;
