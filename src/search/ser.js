import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addcart } from '../store/store.js';

import './ser.css';

function Sec(){

    let dispatch=useDispatch()
    let nav=useNavigate()

    let info=useSelector((s)=>{
        return s.item;

    })

    console.log(info);

    let par=useParams();

    let searchitems=info.filter((s)=>{
        return s.title.includes(par.in)
    })

    console.log(searchitems)

    function redireact(id){

        let realid=id;
      // console.log(realid)
        nav(`/item/${realid}`);

    }



    







    return (
        <div className='searchitem'> 


           

            <div className='set'>

           
            {
                searchitems.map((item)=>{
                    let img=item.image;
                    return <div className='item' >
                           
                           <div className='imagein'>
                              <img src={img} onClick={()=>{redireact(item.id)}}/>
                           </div>

                           <div className='priceandcart'>

                            <h4>$ {item.price}</h4>

                            <button id="bincart" onClick={()=>{
                                //console.log(item)
                                dispatch(addcart(item))}}>Add cart</button>

                           </div>



                           </div>
                })
               }

                </div>

        </div>
    )
}

export default Sec;