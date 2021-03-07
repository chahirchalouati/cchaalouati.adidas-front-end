import React from 'react';
import Carousel from 'react-multi-carousel';

function ProductsSlider({ products }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (

    <Carousel
    renderDotsOutside={true}
      containerClass="carousel-container"
      itemClass='product_card'
      showDots={true}
      responsive={responsive}
    >
      {products.map((product, i) =>
        <div key={i} >
          <img src={product.url} alt="" />
          <div className="details">
            <div className="categories">
              {product.categories.map((c, i) => (
                <span key={i} className="catg">
                  {c}
                </span>
              ))}
            </div>
            <div className="name">{product.name}</div>
            <div className="price">${product.price}</div>
          </div>
        </div>
      )}
    </Carousel>


  );
}

export default ProductsSlider
