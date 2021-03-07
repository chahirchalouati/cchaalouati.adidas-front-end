import React from "react";
import { Link } from "react-router-dom";
import Carousel from "../../Pages/Carousel";
import ProductsSlider from "../Slides/ProductsSlider";
const products = [
  {
    name: "ZX 2K BOOST PURE SHOES",
    categories: ["Originals"],
    price: 150,
    discount:
      "This product is excluded from all promotional discounts and offers.",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_Shoes_White_H69037_01_standard.jpg",
    reviews: [],
    colors: ["Core Black", "Grey Six", "Orange"],
    sizes: [
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "13",
    ],
    specifications: [
      "Lace closure",
      "Textile upper",
      " Textile lining",
      " Boost midsole",
      " Rubber outsole",
      " Imported",
    ],
  },
  {
    name: "ZX 2K BOOST PURE SHOES",
    categories: ["Originals"],
    price: 150,
    discount:
      "This product is excluded from all promotional discounts and offers.",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_Shoes_White_H69037_01_standard.jpg",
    reviews: [],
    colors: ["Core Black", "Grey Six", "Orange"],
    sizes: [
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "13",
    ],
    specifications: [
      "Lace closure",
      "Textile upper",
      " Textile lining",
      " Boost midsole",
      " Rubber outsole",
      " Imported",
    ],
  },
  {
    name: "ZX 2K BOOST PURE SHOES",
    categories: ["Originals"],
    price: 150,
    discount:
      "This product is excluded from all promotional discounts and offers.",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_Shoes_White_H69037_01_standard.jpg",
    reviews: [],
    colors: ["Core Black", "Grey Six", "Orange"],
    sizes: [
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "13",
    ],
    specifications: [
      "Lace closure",
      "Textile upper",
      " Textile lining",
      " Boost midsole",
      " Rubber outsole",
      " Imported",
    ],
  },
  {
    name: "ZX 2K BOOST PURE SHOES",
    categories: ["Originals"],
    price: 150,
    discount:
      "This product is excluded from all promotional discounts and offers.",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_Shoes_White_H69037_01_standard.jpg",
    reviews: [],
    colors: ["Core Black", "Grey Six", "Orange"],
    sizes: [
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "13",
    ],
    specifications: [
      "Lace closure",
      "Textile upper",
      " Textile lining",
      " Boost midsole",
      " Rubber outsole",
      " Imported",
    ],
  },
  {
    name: "ZX 2K BOOST PURE SHOES",
    categories: ["Originals"],
    price: 150,
    discount:
      "This product is excluded from all promotional discounts and offers.",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_Shoes_White_H69037_01_standard.jpg",
    reviews: [],
    colors: ["Core Black", "Grey Six", "Orange"],
    sizes: [
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "13",
    ],
    specifications: [
      "Lace closure",
      "Textile upper",
      " Textile lining",
      " Boost midsole",
      " Rubber outsole",
      " Imported",
    ],
  },
  {
    name: "ZX 2K BOOST PURE SHOES",
    categories: ["Originals"],
    price: 150,
    discount:
      "This product is excluded from all promotional discounts and offers.",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_Shoes_White_H69037_01_standard.jpg",
    reviews: [],
    colors: ["Core Black", "Grey Six", "Orange"],
    sizes: [
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "13",
    ],
    specifications: [
      "Lace closure",
      "Textile upper",
      " Textile lining",
      " Boost midsole",
      " Rubber outsole",
      " Imported",
    ],
  },
  {
    name: "ZX 2K BOOST PURE SHOES",
    categories: ["Originals"],
    price: 150,
    discount:
      "This product is excluded from all promotional discounts and offers.",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_Shoes_White_H69037_01_standard.jpg",
    reviews: [],
    colors: ["Core Black", "Grey Six", "Orange"],
    sizes: [
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "13",
    ],
    specifications: [
      "Lace closure",
      "Textile upper",
      " Textile lining",
      " Boost midsole",
      " Rubber outsole",
      " Imported",
    ],
  },
  {
    name: "ZX 2K BOOST PURE SHOES",
    categories: ["Originals"],
    price: 150,
    discount:
      "This product is excluded from all promotional discounts and offers.",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_Shoes_White_H69037_01_standard.jpg",
    reviews: [],
    colors: ["Core Black", "Grey Six", "Orange"],
    sizes: [
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "13",
    ],
    specifications: [
      "Lace closure",
      "Textile upper",
      " Textile lining",
      " Boost midsole",
      " Rubber outsole",
      " Imported",
    ],
  },
  {
    name: "ZX 2K BOOST PURE SHOES",
    categories: ["Originals"],
    price: 150,
    discount:
      "This product is excluded from all promotional discounts and offers.",
    url:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4811a18977b545b68e9dac7500f45896_9366/ZX_1K_Boost_Shoes_White_H69037_01_standard.jpg",
    reviews: [],
    colors: ["Core Black", "Grey Six", "Orange"],
    sizes: [
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
      "13",
    ],
    specifications: [
      "Lace closure",
      "Textile upper",
      " Textile lining",
      " Boost midsole",
      " Rubber outsole",
      " Imported",
    ],
  },
];
function ContainerSlideProduct({ title, viewAllLink, products }) {

  return (
    <section className="products_slides_container">
      <div className="products_slides_container_header">
        <h3 >{title}</h3>
        <Link to={"/" + viewAllLink} className="goToAll">VIEW ALL</Link >
      </div>

      <div className="products_slides_container_body">
        <Carousel products={products} title={title} viewAllLink={viewAllLink} />
      </div>
    </section>
  );
}

export default ContainerSlideProduct;
