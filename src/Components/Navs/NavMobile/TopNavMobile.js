import React from "react";

function TopNavMobile({ text }) {
  if (text) {
    return (
      <div className="top_nav_mobile">
        <div className="top_nav_item_mobile">{text}</div>
      </div>
    );
  }
  return <></>;
}

export default TopNavMobile;
