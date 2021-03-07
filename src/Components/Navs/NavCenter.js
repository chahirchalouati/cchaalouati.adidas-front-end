import React from "react";
import { NavLink } from "react-router-dom";

function CenterNav() {
  const navigation = [
    { name: "help", path: "/help" },
    { name: "exchanges & returns", path: "/exchanges_returns" },
    { name: "order tracker", path: "/order_tracker" },
    { name: "join creators club", path: "/join_creators" },
    { name: "creators club", path: "/creators_club" },
    { name: "log in", path: "/account-login" },
  ];
  return (
    <div className="center_nav">
      {navigation.map((t, i) => (
        <NavLink
          activeClassName={"link_active"}
          key={i}
          to={t.path}
          className="link"
        >
          {t.name}
        </NavLink>
      ))}
    </div>
  );
}

export default CenterNav;
