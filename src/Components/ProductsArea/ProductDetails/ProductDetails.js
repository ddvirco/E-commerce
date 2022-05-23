import { useContext, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import myContext from "../../../MyContext"

function ProductDetailsComp() {

    const [allData, setAllData] = useContext(myContext)

    const { id } = useParams()
    const [oneProduct, setOneProduct] = useState({})
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    async function getProductData() {
        setLoading(true)
        await fetch(`https://fakestoreapi.com/products/${id}`).then(resp => resp.json())
            .then(prod => setOneProduct(prod));
        setLoading(false)
    }

    useEffect(() => {
        getProductData()
    }, [])

    const addToCart = () =>{
        dispatch({type: "Add", payload: {id : oneProduct.id ,price: oneProduct.price,
                                         title: oneProduct.title ,image: oneProduct.image,
                                        description: oneProduct.description}})
    }

    const Product = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={oneProduct.image} alt={oneProduct.title} height="300px" width="300px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">{oneProduct.category}</h4>
                    <h1 className="display-5">{oneProduct.title}</h1>
                    <p className="lead fw-bolder">
                        Rating  {oneProduct.rating && oneProduct.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-4 fw-bolder my-4">
                         {oneProduct.price} $
                    </h3>
                    <p className="lead">{oneProduct.description}</p>
                    <div className="buttons">
                        <button className="btn btn-outline-primary px-4 py-2"
                            onClick={addToCart}>
                            Add to Cart
                        </button>
                        <NavLink to="/cart" className="btn btn-outline-primary ms-2 px-3 py-2">Go to Cart </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? 
                     <div class="d-flex justify-content-center">
                     <div class="spinner-border" role="status">
                       <span class="visually-hidden">Loading...</span>
                     </div>
                   </div>
                     : <Product />}
                </div>
            </div>
        </div>
    )
};

export default ProductDetailsComp