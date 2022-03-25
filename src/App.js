import React, {useEffect, useState} from 'react';
import './App.css';

import data from './ServiceData/data';

const App = () =>{  
const [isClicked,setClicked] = useState();

  const outputHandler =()=>{
    setClicked('output');
  }
  const codeHandler =()=>{
    setClicked('code');
  }
  <div>
    <button onClick={outputHandler}>Output</button>
    <button onClick={codeHandler}>Code</button>
  </div>
  const [urlData, setUrlData] = useState(data);
    
  return (
      <div className='container'>
    <div className="gallery">
      <div class="gallery__item gallery__item--1" >
           <img src={"https://images.unsplash.com/uploads/14128434147336bfb286b/e76494ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="Gallery image 1" class="gallery__img" />
      </div>
      <div class="gallery__item gallery__item--2" >
           <img src={"https://images.unsplash.com/photo-1443926886562-c91054221a5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"} alt="Gallery image 2" class="gallery__img" />
      </div>
      <div class="gallery__item gallery__item--3" >
           <img src={"https://images.unsplash.com/11/dreamcatcher.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"} alt="Gallery image 3" class="gallery__img" />
      </div>
      <div class="gallery__item gallery__item--4" >
           <img src={"https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA"} alt="Gallery image 4" class="gallery__img" />
      </div>
      <div class="gallery__item gallery__item--5" >
           <img src={"https://images.unsplash.com/11/dreamcatcher.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"} alt="Gallery image 5" class="gallery__img" />
      </div>
      <div class="gallery__item gallery__item--6" >
           <img src={"https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"} alt="Gallery image 6" class="gallery__img" />
      </div>
      <div class="gallery__item gallery__item--7" >
           <img src={"https://i.picsum.photos/id/1033/2048/1365.jpg?hmac=zEuPfX7t6U866nzXjWF41bf-uxkKOnf1dDrHXmhcK-Q"} alt="Gallery image 7" class="gallery__img" />
      </div>     
    </div>
  </div>
   
  );
}

export default App;
