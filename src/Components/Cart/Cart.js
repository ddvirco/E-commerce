
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCart from './ProductCart';

function CartComp(){

    const [totalPrice, SetTotalPrice] = useState(0)

    const storeDate = useSelector(state => state)
    const dispatch = useDispatch()

    const price = () => {
        let total = 0
       storeDate.cartProducts.forEach((item) => {
           total += parseInt(item.price)
       });
       SetTotalPrice(total)
    }

    useEffect(()=> {
        price()
    },[storeDate.cartProducts.length])


    return (
        <>
            <div className='container py-5'>
                <div className="row py5"  >
                    <div className="card h-100 text-center p-4"  >
                        <p>Your cart:</p>
                        <p>Total Products: {storeDate.cartProducts.length}</p>
                        <p>Total Price: {totalPrice}$ </p>
                        {storeDate.cartProducts.map(p => {
                           return <ProductCart id={p.id} key={p.id} 
                                image={p.image} price={p.price}
                                title={p.title}/>
                        })}
                        <br />
                    </div>
                </div>
            </div>
    </>
    )
};

export default CartComp