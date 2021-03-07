import React from "react";
import VizSensor from "react-visibility-sensor";
import RouterHistory from "../../Routes/History";

function ViewAllCard({ viewAllLink, title, setDisabledNextButton }) {
    return (
        <VizSensor partialVisibility onChange={(e) => { setDisabledNextButton(prev => e) }}>
            <div className="product_card viewAll" onClick={(e) => { RouterHistory.push("/" + viewAllLink); }}>
                <div className="title" >{title}</div>
                <div>View All</div>
            </div>
        </VizSensor>
    );
}

export default ViewAllCard;
