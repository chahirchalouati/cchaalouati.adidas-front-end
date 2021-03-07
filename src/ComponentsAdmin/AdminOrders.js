import React from 'react'




function AdminOrders({ match }) {
    console.log(match);
    return (
        <div className='admin__dash__container'>
            <h3 style={{ padding: '0.5em' }}>Orders</h3>
            <div className="order_wrapper">
                <div className="order_wrapper_header"></div>
                <div className="order_wrapper_body">
                    <table>
                        <thead>
                            <tr>
                                <th>Order #</th>
                                <th>Bill to</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Tolal</th>
                                <th>Date</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((oreder, index) => <tr key={index} className='order_item'>

                                    <td>{Math.round(Math.random() * 10000)}</td>
                                    <td>SomeOne</td>
                                    <td className='product_row'>
                                        <img src="https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/8087112130be460ab566ac4100ea8d3d_9366/Tuta_Primegreen_Essentials_3-Stripes_Nero_GK9651_21_model.jpg" alt="" />
                                        <div className="product_informations">
                                            <div className="name">
                                                <div className="value">PRIMEGREEN ESSENTIALS 3-STRIPES</div>
                                            </div>
                                            {/*index % 2 == 0 && <div className="options">
                                                <div className="placeHolder">Options</div>
                                                <div className="value"></div>
                            </div>*/}


                                        </div>

                                    </td>
                                    <td>$ {Math.round(Math.random() * 1000) / 10}</td>
                                    <td>{Math.round(Math.random() * 1000)}</td>

                                    <td>{new Date().toUTCString()}</td>
                                    {index % 2 == 0 ? <td className='status'>Complete</td> : <td className='status' style={{ color: 'red' }}>Complete</td>}

                                </tr>)
                            }

                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}

export default AdminOrders


