import React from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'

const Checkout = () => {

    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className="checkout__left">

            <img 
                className='checkout__ad' 
                src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/Primeevent/XCM_Manual_1500x300_1218905_1138182_R1_51fe0ef1_16bf_43c7_84a2_ecda6a1f2396_jpg._CB436084429_.jpg' 
                alt='ad'
            />
            {basket?.length === 0 ? (
                <div className="">
                    <h2 className='checkout__title'>Your Amazon basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items, Ckick "Add to basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            key={item.id} 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
        )}
    </div>
  )
}

export default Checkout