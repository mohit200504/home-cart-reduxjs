import React from 'react';
import './item.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Item(){

let items=useSelector((s)=>{
    return s.item;
})

let par=useParams();

console.log(par)

let item=items.filter((i)=>{
    return par.id==i.id;
})

console.log(item)




    return (
        <div>
            {
                item.map((item)=>{

                    let img=item.image;

                    return <div className='maincon'>
                        <h1>{item.title}</h1>
                        <img src={img} id="ims"/>

                        <div className='priceanddec'>
                            <div className='price'>


                                <div>
                                <h1>$ {item.price}</h1>
                                </div>
                                <div>
                                <h4>RATING :{item.rating.rate}</h4>
                                </div>
                                

                               
                               
                                
                            </div>

                            <div className='dec'>

                                <h5>
                                    {
                                        item.description

                                    }
                                </h5>

                            </div>

                        </div>

                       


                        </div>
                })
            }
        </div>
    )
}

export default Item;