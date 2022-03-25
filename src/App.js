import React, {useEffect, useState} from 'react';
import './App.css';

import data from './ServiceData/data';

const App = () =>{
  const [urlData, setUrlData] = useState(data);
    
  return (
    <div className='mrg-container'>
      <div className="grid-container">
        {urlData.map((item)=>{    
          return <div className="grid-item" key={item.id}><img className='img-Size' src={item.name} /></div>
        })}
      </div>
    </div>
  );
}

export default App;
