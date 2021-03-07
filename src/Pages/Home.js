import React from "react";
import ContainerCardDiscriber from "../Components/Containers/ContainerCardDiscriber";
import ContainerPopular from "../Components/Containers/ContainerPopular";
import ContainerRoot from "../Components/Containers/ContainerRoot";
import ContainerSlideProduct from "../Components/Containers/ContainerSlideProduct";
import HeaderHome from "../Components/Headers/HeaderHome";
import { products } from "../data";

function Home() {
    return (
        <>
            <ContainerRoot>
                <HeaderHome />
                <ContainerPopular />
                <ContainerSlideProduct
                    viewAllLink={"new"}
                    products={products}
                    title={"NEW ARRIVALS"}
                />
                <ContainerCardDiscriber />
                <ContainerSlideProduct
                    viewAllLink={"trending"}
                    products={products}
                    title={"WHAT'S TRENDING"}
                />
                <ContainerSlideProduct
                    viewAllLink={"viewedItems"}
                    products={products}
                    title={"RECENTLY VIEWED VIEWED VIEWED ITEMS"}
                />
            </ContainerRoot>
        </>
    );
}

export default Home;
{
    /**
  
           <ContainerPopular />
                  <ContainerSlideProduct
                      viewAllLink={"new"}
                      products={products}
                      title={"NEW ARRIVALS"}
                  />
                  <ContainerCardDiscriber />
                  <ContainerSlideProduct
                      viewAllLink={"trending"}
                      products={products}
                      title={"WHAT'S TRENDING"}
                  />
                  <ContainerSlideProduct
                      viewAllLink={"viewedItems"}
                      products={products}
                      title={"RECENTLY VIEWED VIEWED VIEWED ITEMS"}
                  />
  
  
  */
}
