import React from "react";
import CardDiscriber from "../Cards/CardDiscriber";

function ContainerCardDiscriber() {
    return (
        <section className="container_discriber">

            <CardDiscriber
                title={"ULTRABOOST 21"}
                linkTo={"ultraboost"} 
                
                linkText={"SHOP NOW"}
                decription={"Say hello to incredible energy return."}
                imgUrl={
                    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/running-ss21-ultraboost-Q2-glp-w-teaser-large-new-d_tcm221-640514.jpg"
                }
            />

            <CardDiscriber
                title={"ULTRA4D"}
                linkTo={"ultra4d"}

                linkText={"SHOP NOW"}
                decription={"A new dawn in running shoe innovations."}
                imgUrl={
                    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/running-ss21-ultra4d-launch-hp-teaser-large-d_tcm221-636822.jpg"
                }
            />


        </section>
    );
}

export default ContainerCardDiscriber;
{/** 
























*/}