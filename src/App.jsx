import React, { useEffect, useState } from 'react';
import Nabvar from './Components/Nabvar/Nabvar';

const App = () => {
   const [data,userData]=useState([]);
   useEffect(()=>{
      fetch("data.json")
      .then(res=>res.json())
      .then ((data)=>console.log(data));
   },[])
  
  return (
    <>
     
   <Nabvar></Nabvar>

    </>
  );
};

export default App;