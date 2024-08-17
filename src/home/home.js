import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addata } from '../store/store.js';
import './home.css';
import { addcart } from '../store/store.js';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Home() {
    const dispatch = useDispatch();

    const info = useSelector((state) => state.item);

    let [input,uinput]=useState("");

    useEffect(() => {
        async function fetchData() {
           
            if (info.length === 0) {
                let res = await fetch('https://fakestoreapi.com/products');
                let data = await res.json();
                //console.log(data);

                dispatch(addata(data));
            }
        }

        fetchData();

    }, []);

    let s="https://th.bing.com/th/id/R.4058ed407857ea248f9d700c695f077c?rik=PCGgW82BTjsazg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fpaomedia%2fsmall-n-flat%2f1024%2fsearch-icon.png&ehk=DgN5sWjkteCBqzaXfFUdwMGG3S5oYRV4EtFEWDSY%2bEk%3d&risl=&pid=ImgRaw&r=0";

    let nav=useNavigate();


    function redireact(id){

        let realid=id;
      // console.log(realid)
        nav(`/item/${realid}`);

    }



    function getSearch(input){

        //console.log(input)
        nav(`/search/${input}`)
    }

    if(info.length===0){
        return (
            <h1>fetching data...</h1>
        )
    }

    return (
        <div className='main'>

           
           
            <div className='s'>

               <input placeholder=' search product' type='text' onChange={(e)=>{uinput(e.target.value)}}/>
               <button id="bina" onClick={()=>{getSearch(input)}}><img src={s}></img></button>
          
               </div>

               <div className='con'>

               {
                info.map((item)=>{
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
    );
}

export default Home;


// edit card in home //
