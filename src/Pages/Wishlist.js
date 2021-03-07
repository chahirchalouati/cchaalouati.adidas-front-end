import React, { useState } from 'react'
import ContainerRoot from '../Components/Containers/ContainerRoot'

const links = [
    , "Products"
    , "Ordering & Payments"
    , "Delivery"
    , "Promotions & Vouchers"
    , "Returns & Refunds"
    , "Account & Newsletter"
    , "Company information"



];


function Wishlist() {

    const [itemsCount, setitemsCount] = useState(0);



    return (
        <ContainerRoot>
            <div className="auth_wrapper">
                <div className="wishlist_items">
                    <h4 className="title">MY WISHLIST</h4>
                    {itemsCount === 0 && <span className='empty__wishlist'>
                        <div className="item__count">{itemsCount} ITEMS</div>
                        <br />  <p style={{ fontSize: '14px', wordBreak: 'break-all' }}>You haven't saved any items to your wishlist yet. Start shopping and add your favorite items to your wishlist.</p>
                    </span>}

                </div>
                <div className="help__wishlist">
                    <h4 className="title">NEED HELP?</h4>

                    <div className="links">
                        {links.map((l, i) => <div key={i} className='link'>{l}</div>)}
                    </div>

                </div>
            </div>
        </ContainerRoot>
    )
}

export default Wishlist
