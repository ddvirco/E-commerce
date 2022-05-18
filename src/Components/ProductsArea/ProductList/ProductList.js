import * as React from 'react';
import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard"

function ProductList() {

    const [allProducts, setAllProducts] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])

    async function getAllProducts() {
        const resp = await axios.get("https://fakestoreapi.com/products")
        setAllProducts(resp.data)
        setDisplayProduct(resp.data)
    }

    useEffect(() => {
        getAllProducts();
    }, [])

    function removeProduct(id) {
        setDisplayProduct(displayProduct.filter((p) => p.id !== id))
    }

    const categories = allProducts.map((p) => p.category)
        .filter((value, index, array) => array.indexOf(value) === index)

    function changeCategory(e) {
        let filter = allProducts.filter(item => item.category === e.target.value)
        if (filter) {
            setDisplayProduct(filter)
        }
        if (e.target.value === "All categories") {
            setDisplayProduct(allProducts)
        }
    }

    return (
        <div >
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Our Special Products</h1>
                        <hr></hr>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='d-flex justify-content-center mb-5 pb-5'>
                        <select onChange={(e) => changeCategory(e)}>
                            <option>All categories</option>
                            {categories.map((item) => { return <option key={item}>{item}</option> })}
                        </select>
                    </div>
                    {displayProduct.length <= 0 ?
                    <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div> : 
                        displayProduct.map(({ id, title, price, image, description, rating }) => {
                            return <ProductCard key={id}
                                id={id}
                                title={title} price={price}
                                image={image}
                                description={description}
                                winnerNumber={removeProduct}
                                rating={rating}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductList