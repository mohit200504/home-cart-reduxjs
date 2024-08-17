
import './App.css';

import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addata } from './store/store.js';

import Cart from './cart/cart.js';
import Item from './item/item.js';
import Sec from './search/ser.js';
import Home from './home/home.js';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';


function App() {

  


let [input,uinput]=useState("");


  return (
    <div className="App">

      <Router>
        <div className='head'>

         <Link to="/home"><button>
               home
               </button></Link> 
          <Link to="/cart"><button>
               cart
               </button></Link>

               

        </div>
     
    

        <Routes>

          <Route path='/item/:id' element={<Item/>}/>
          <Route path='/search/:in' element={<Sec/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/home' element={<Home/>}/>
         

        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
