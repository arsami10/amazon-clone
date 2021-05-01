import React from 'react'
import './Payment.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'

function Payment() {
    const [{ basket, user }] = useStateValue();

    return (
        <div className = "payment" >
            <div className = "payment__container" >
                <h1>
                    Checkout (
                        <Link to = './Checkout'> {basket?.length} items </Link>
                    )

                </h1>


                <div className = "payment__section">
                    <div className = "payment__section__title">
                        <h3>Delivery address</h3>
                    </div>
                    
                    <div className = "payment__section__address">
                        <p>{user?.email}</p>
                        <p>Chandgaon, abashik, bloc A</p>
                        <p>Chittagon, Bangladesh</p>
                    </div>
                </div>

                <div className = "payment__section">
                    <div className = "payment__section__title">
                        <h2>Review items and delivery</h2>
                    </div>

                    <div className = "payment__section__items">
                        {basket.map(item =>
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />    
                        )}

                    </div>
                </div>

                <div className = "payment__section">
                    <div className = "payment__section__title">
                        <h2>Payment Method</h2>
                    </div>
                </div>

             </div>
        </div>

            
    )
}

export default Payment
