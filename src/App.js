import React, {useEffect, useState} from 'react';
import './App.css';
import Grid from '../src/views/grid'

import data from './ServiceData/data';

const App = () =>{  
     return (
     <div className="gridContainer">
          <Grid/>
     </div>   
  );
}

export default App;
