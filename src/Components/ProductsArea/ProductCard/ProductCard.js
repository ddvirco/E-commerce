
import * as React from 'react';
import myContext from '../../../MyContext';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ProductCard({price, title,image, description, winnerNumber, id}){

    const [isDark, setIsDark] = React.useContext(myContext)

    const dispatch = useDispatch()
    
    return ( 
        <>
        <div className="col-md-3 mb-4"  >
            <div class="card h-100 text-center p-4"  >
                <img src={image} class="card-img-top" alt={title} height="250px" />
                <div className="card-body">
                    <h5 className="card-title mb-0">{title.substring(0,12)}</h5>
                    <p className="card-text fw-bolder">{price} $</p>
                    <NavLink to={`/products/${id}`} className="btn btn-primary mb-2">Buy Now</NavLink>
                    {/* <button className="btn btn-warning" 
                    onClick={()=> winnerNumber(id)}>
                        Delete
                    </button> */}
                </div>
            </div>
        </div>
     </>
    )
}

export default ProductCard