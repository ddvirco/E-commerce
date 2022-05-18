
import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import myContext from '../../MyContext';
import ProductCart from './ProductCart';

function CartComp(){

    const [isDark, setIsDark] = useContext(myContext)
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

    const reduxRemove = (id) =>{
        dispatch({type: "Delete" , payload: {id} })
        console.log(id)
    }


    const lessOne = () => {
        console.log("one less..")
    }

    const UserCart = ({ price, id, image,title})=>{
        return (
            <div className='px-4 my-5 bg-light rounded-3 '>
                <div className='container py-4'>
                    <button className='btn btn-close float-end' aria-label='close'
                     onClick={() =>reduxRemove(id)}>
                     </button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={image}  height="200px" width="180px" />
                        </div>
                        <div className='col-md-4'>
                            <h3>{title}</h3>
                            <p className='lead fw-bolder'>$ {price}</p>
                            <button className='btn btn-info'>+</button>
                             {price} 
                            <button className='btn btn-info' onClick={()=>lessOne()}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className='container py-5'>
                <div className="row py5"  >
                    <div className="card h-100 text-center p-4"  >
                        <p>Your cart:</p>
                        {storeDate.cartProducts.map(p => {
                           return <ProductCart id={p.id} key={p.id} 
                        //    return <UserCart id={p.id} key={p.id} 
                                image={p.image} price={p.price}
                                title={p.title}/>
                        })}
                        <br />
                        <p>Total Products: {storeDate.cartProducts.length}</p>
                        <p>Total Price: {totalPrice}$ </p>

                    </div>
                </div>
            </div>
    </>
    )
};

export default CartComp