import { useState } from "react"
import { useDispatch } from "react-redux"

function ProductCart({ price, id, image, title }) {

    const [units, setUnits] = useState(1)

    const dispatch = useDispatch()

    const reduxRemove = (id) => {
        dispatch({type:"Delete" , payload:{id} })
    }

    const addOne = (price) => {
        console.log(price)
        let totalUnits = setUnits(units +1)
        let sum = parseInt(price * totalUnits) 
        console.log(sum)
    }
    const lessOne = () => {
        setUnits(units -1)
        console.log("one less..")
    }

    return (
        <div>
            <div className='px-4 my-5 bg-light rounded-3 '>
                <div className='container py-4'>
                    <button className='btn btn-close float-end' aria-label='close'
                        onClick={() => reduxRemove(id)}>
                    </button>
                    <div className='row justify-content-center'>
                        <div className='col-md-4'>
                            <img src={image} height="200px" width="180px" />
                        </div>
                        <div className='col-md-4'>
                            <h3>{title}</h3>
                            <p className='lead fw-bolder'>$ {price}</p>
                            <button className='btn btn-info' onClick={() => addOne(price)}>+</button>
                            {price} , {units}
                            <button className='btn btn-info' onClick={() => lessOne()}>-</button>
                                     
                              total price: 

                        </div>
                    
                    </div>
         
                </div>
            </div>
        

        </div>)
}

export default ProductCart