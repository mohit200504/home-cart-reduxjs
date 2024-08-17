
import React from 'react';
import './cart.css';

import { useSelector } from 'react-redux';
import { removecart } from '../store/store.js';
import { useDispatch } from 'react-redux';
function Cart(){

    let dispatch =useDispatch();

let cartinfo=useSelector((s)=>{

    return s.cart;

})

console.log(cartinfo)
    return (
        <div className='mainincart'>

           

           

            {
                cartinfo.map((c)=>{

                    let i=c.image;
                    return <div className='cartitem'>

                        <div className='title'>
                            <h3>{c.title}</h3>
                        </div>
                        <div className='cartandcon'>

                            <div className='incartimage'>
                                 <img src={i}></img>
                            </div>

                            <div>
                                <button id="cartdelete" onClick={()=>{dispatch(removecart(c))}} >
                                    delete
                                </button>
                            </div>



                         </div>


                        </div>
                })
            }

            </div>

           
           
           
       
    )
}

export default Cart;



