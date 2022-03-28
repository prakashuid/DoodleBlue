import React, {useEffect, useState} from 'react';
import './App.css';
import Grid from '../src/views/grid';
import Todo from '../src/views/ToDo/todo';
import Todoview from '../src/views/ToDo/Todoview';
import { Button, Card, Form, input } from 'react-bootstrap';


import data from './ServiceData/data';

const App = () =>{  
     const [isClicked, setIsClicked ] = useState();
     const handler =(a)=>{
setIsClicked(a)
                         }
     return (
     <div className="mt-5 borderRad">
          {/* <div className='row mainGrid'>
          <div className='col-1'><Button variant="success" onClick={() => handler('Grid')}>Grid</Button></div> 
          <div className='col-1'><Button variant="success" onClick={() => handler('Todo')}>Todo</Button></div> 
          </div> */}
          {isClicked == 'qGrid' ? <div style={{width: '100% !important'}}><Grid/></div> : <Todoview/>}
          
     </div>   
  );
}

export default App;
