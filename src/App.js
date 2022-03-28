import React, {useEffect, useState} from 'react';
import './App.css';
import Grid from '../src/views/grid';
import Todo from '../src/views/ToDo/todo';
import Todoview from '../src/views/ToDo/Todoview';


import data from './ServiceData/data';

const App = () =>{  
     return (
     <div className="">
          {/* <Grid/> */}
          <Todoview/>
     </div>   
  );
}

export default App;
