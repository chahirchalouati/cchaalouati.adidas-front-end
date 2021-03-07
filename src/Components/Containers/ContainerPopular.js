import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function ContainerPopular() {
    return (
        <section className="popular_container">
            <h2 className="popular_header">POPULAR RIGHT NOW</h2>

            <div className="list_link">
                {["BEYONCÉ", "NMD", "YEEZY", "ULTRABOOST", "ULTRA"].map((text, i) => (
                    <div className="link" key={i}>
                        <div className="link_text">{text}</div>
                        <HiOutlineArrowNarrowRight
                            size={20}
                            className="link_icon"
                        ></HiOutlineArrowNarrowRight>
                    </div>
                ))}
            </div>

            <div className="popular_container_cards">
                {[
                    "MEN'S NMD",
                    "WOMEN'S NMD",
                    "WOMEN'S SNEAKERS",
                    "MEN'S SNEAKERS",
                ].map((text, i) => (
                    <div key={i} className="card_popular_products">
                        <img
                            decoding="async"
                            loading="lazy"
                            src={
                                "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/dfb6dcd180124a45a5c7aba701129201_9366/nmd_r1-shoes.jpg"
                            }
                            alt={""}
                        />

                        <div className="link">{text}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ContainerPopular
