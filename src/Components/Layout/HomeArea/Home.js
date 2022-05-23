import photo from '../../../Assets/backgroud.jpg'
import ProductList from '../../ProductsArea/ProductList/ProductList'

function HomeComp() {

    return (
    <div className="hero">
        <div class="card bg-dark text-white border-0">
            <img src="https://img.freepik.com/free-photo/front-view-woman-with-shopping-bag-concept_23-2148674158.jpg?w=2000" class="card-img" alt="Background" height="580px"/>
            <div class="card-img-overlay d-flex flex-column justify-content-center">
                <div className='container'>
                    <h5 class="card-title display-3 fw-bolder mb-0">New Season Arrive!!</h5>
                    <p class="card-text lead fs-2">
                        Take a Look...
                    </p>
                </div>
            </div>
        </div>
        <ProductList />
    </div>
    )
};

export default HomeComp