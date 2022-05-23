
import * as React from 'react';
import myContext from '../../../MyContext';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function ProductCard({price, title,image, description, winnerNumber, id}){

    const [allData, setAllData] = React.useContext(myContext)

    const dispatch = useDispatch()
    
    return ( 
        <>
            <div className="col-md-3 mb-4"  >
                <div class="card h-100 text-center p-4"  >
                    <NavLink to={`/products/${id}`}>
                    <img src={image} class="card-img-top" alt={title} height="250px" />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title mb-0">{title.substring(0,12)}</h5>
                        <p className="card-text fw-bolder">{price} $</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard