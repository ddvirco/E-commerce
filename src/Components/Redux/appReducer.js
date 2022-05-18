
const appReducer = (state = {cartProducts :[]}, action) => {
    switch(action.type)
    {
        case "Add":
            return {...state,cartProducts : [...state.cartProducts, action.payload] }
        
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