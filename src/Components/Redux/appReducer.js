
const appReducer = (state = {cartProducts :[]}, action) => {
    switch(action.type)
    {
        case "Add":
            const productExist = state.cartProducts.find((x) => x.id === action.payload.id)
            if(productExist){
                alert("Already picked...")
                return {...state}
            }
            // -----------
            return {...state ,cartProducts : [...state.cartProducts, action.payload]}
            
        
        case "Delete":
            const product = action.payload.id
            let arr = state.cartProducts
            let index = arr.findIndex((x) => x.id == product)
            if(index >= 0){
                arr.splice(index, 1)
            }
            return {...state, cartProducts: arr}
                  
        default:
            return state
    }
}

export default appReducer