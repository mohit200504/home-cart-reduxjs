import { createSlice,configureStore } from "@reduxjs/toolkit";


let data=[
    
];





let itemsslice=createSlice({

    name:"items",
    initialState:data,
    reducers:{
        getdata:(store)=>{
            return store;

        },
        
        addata:(state,actions)=>{
           
            let {payload} =actions;
           // console.log(payload)

            return [...state,...payload]

            
        }
    }


})

let cart=[]

let cartslice =createSlice({

    name:"cart",
    initialState:cart,
    reducers:{
        getcart:(state)=>{
            return state;

        },
        addcart:(state,actions)=>{

            
          let {payload} =actions;
         
          
          let newdata=[...state,payload];
          //console.log(newdata);
          return newdata;
           
        },

        removecart:(state,actions)=>{

            let {payload} =actions;
           let newcart=state.filter((cart)=>{
                return cart.id!==payload.id;
           })

           return newcart;
        }

    }

})

let store=configureStore({
    reducer:{
        item:itemsslice.reducer,
         cart:cartslice.reducer
    }
})

export const {getdata,addata} =itemsslice.actions;
export const {addcart,removecart} =cartslice.actions;



export default store;
