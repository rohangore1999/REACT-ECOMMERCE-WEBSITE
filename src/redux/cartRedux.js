import { createSlice } from '@reduxjs/toolkit'

let total_cal = 0

// creating one slice

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        // reducers are the workers >> functions
        // here we have addProduct functionality
        // it is taking (previous state, and current action)

        addProduct: (state, action) => {
            // when addtocart button click it will increase the quantity
            // and then push the new value which is represent as a payload into product
            console.log("action.payload >>> ", action.payload)
            console.log(" action.payload.price >> ", action.payload.price * action.payload.quantity)
            console.log(" action.payload.quantity >> ", action.payload.quantity)

            const dupProd = state.products.find((item) => item.id === action.payload.id)
            console.log("DUPPROD >>> ", dupProd)
            let isExist = state.products.find((item) => item.id === action.payload.id ? true : false)

            if (isExist) {
                console.log("EXISTED action.payload.quantity >>> ", action.payload.quantity)
                console.log("EXISTED action.payload.quantity >>> ", state.quantity)
                state.quantity += action.payload.quantity;
                console.log("Total QTY >>>", state.quantity)

                // to update only qty if the same product clicked
                dupProd.qty = action.payload.qty
                state.total += action.payload.price * action.payload.qty;
            }
            else {
                state.quantity = action.payload.quantity;
                // action.payload >>> it will get data from updated object which product{}
                state.total += action.payload.price * action.payload.qty;

                state.products.push(action.payload);
            }

            
             // to calculate total price
            //  state.products.map((item) => (
            //     state.total = (item.price * item.qty)
            // ))

            // console.log("item price >>> ", state.total)

        },

        // here we will filter the data; the data which we click remove btn, except that we will filter all the rest products and update the products array

        // we are comparing based on id and assigning the filtered data to nextCartItems.

        // and nextCartItems is assigned to products array
        removeFromCart(state, action){
            const nextCartItems = state.products.filter(
                cartItem => cartItem.id !== action.payload.id
            )

            state.products = nextCartItems
        }

        
    }


})


export const { addProduct, removeFromCart } = cartSlice.actions

// "default >>> because we are using it in our reducers"
export default cartSlice.reducer;