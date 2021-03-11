import React, { useEffect, useState } from "react";
import { GrCirclePlay, GrFormEdit } from "react-icons/gr";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductDetailsCard from "../Components/Cards/ProductDetailsCard";
import RouterHistory from "../Routes/History";
import ProductService from "../Services/ProductService";
/*[1] find  product in  store */
// else
/*[2] fetch from server  */
// else
/*[3] show error message  */

function AdminProductDetails() {
    const { id } = useParams();
    const { RX_PRODUCTS } = useSelector((state) => state);
    const [product, setProduct] = useState(null);
    const [currentMedia, setcurrentMedia] = useState({
        type: "image",
        url:
            "http://www.asdalcione.it/wp-content/uploads/2016/08/jk-placeholder-image-1.jpg",
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const currentProduct = RX_PRODUCTS.products.find((pr) => pr.id == id);
        if (currentProduct === undefined || currentProduct === null) {
            dispatch(ProductService.getOneById(id));
            RX_PRODUCTS.get_one_products_success &&
                setProduct((prev) => RX_PRODUCTS.one_product);
        } else {
            setProduct((prev) => currentProduct);
        }

        product && setMediaFile();
    }, [RX_PRODUCTS, product]);

    const setMediaFile = () => {
        const currentFile = product.files.find((file) => file);
        if (currentFile.type.includes("image")) {
            setcurrentMedia({
                ...currentMedia,
                type: "image",
                url: "http://localhost:8080" + currentFile.url,
            });
        } else if (currentFile.type.includes("video")) {
            setcurrentMedia({
                ...currentMedia,
                type: "video",
                url: "http://localhost:8080" + currentFile.url,
            });
        }
    };

    return (
        <div className="one__product__container">
            <div className="product_media_slider">
                <div className="media_wrapper">
                    <div className="main__media">
                        <div className="navigator__media_product">
                            <span className="navigation__item_product" onClick={e=> RouterHistory.push("/products")} > <IoReturnUpBackSharp size={25} /><span>Back</span></span>


                        </div>
                        {currentMedia.type === "image" && (
                            <img src={currentMedia.url} alt="" />
                        )}
                        {currentMedia.type === "video" && (
                            <video
                                src={currentMedia.url}
                                autoPlay={true}
                                loop={true}
                                muted={true}
                                controls={false}
                            ></video>
                        )}
                    </div>
                    <div className="main_media_slider">
                        {product &&
                            product.files.map((file, index) => {
                                if (file.type.includes("image")) {
                                    return (
                                        <img
                                            key={index}
                                            src={"http://localhost:8080" + file.url}
                                            alt={file.name}
                                            onClick={(e) =>
                                                setcurrentMedia({
                                                    ...currentMedia,
                                                    type: "image",
                                                    url: "http://localhost:8080" + file.url,
                                                })
                                            }
                                        />
                                    );
                                } else if (file.type.includes("video")) {
                                    return (
                                        <GrCirclePlay
                                            className="video_icon"
                                            size={40}
                                            key={index}
                                            onClick={(e) =>
                                                setcurrentMedia({
                                                    ...currentMedia,
                                                    type: "video",
                                                    url: "http://localhost:8080" + file.url,
                                                })
                                            }
                                        />
                                    );
                                }
                            })}
                    </div>
                </div>
            </div>

            <ProductDetailsCard product={product} />
        </div>

    );
}

export default AdminProductDetails;
/**get_one_products_start,
        get_one_products_success,
        get_one_products_fail, */
