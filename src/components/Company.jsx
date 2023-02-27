

// import axios from "axios";

// let url='https://dummyjson.com/products/1'
// https://www.coverfox.com/motor/fourwheeler/api/vehicle-make/
 

import React, { useEffect, useState } from "react";
import Vehicles from './vehicle_make.json'


function Company({modelPage}) { 
  // let data=30
  // let name="BMW"
  const [comp, setComp] = useState([]);
  const [search,setSearch]= useState('');
  const [hit,setHit]= useState(false);
  

  const fetchData = () => {
    return fetch("http://0.0.0.0:8000/motor/fourwheeler/api/vehicle-make/")
  .then((response) => response.json())
  .then((data) => {setComp(data["data"])});
  }

  useEffect(() => {
     fetchData();
    document.getElementById('model-input').addEventListener('click', renderList );
  },[])

  const renderList = () =>{
    return(
      <div className="list-container" style={{
        overflow: "scroll",
        height: "116px",
        width: "211px",
        }}>
        {console.log(search)}
        {comp.map((val)=> val['name'].toLowerCase().includes(search.toLowerCase()) ? <div onClick={(()=>modelPage(val.id,val.name))} key={val['id']} className="list-item">{val.name}</div>:null)}
      
      </div>
    )
    }

 

  return (
    <main>
      <h3>Which car do you drive?</h3>
      
        {/* {user && user.length > 0 && user.map((userObj, index) => (
          
            <button key={userObj.id}>{userObj.name}</button>
          ))} */}
          <input autoComplete="true"   id="model-input" list="data" placeholder="Search Brand" onChange={(e)=>setSearch(e.target.value)} onClick={()=>setHit(true)}/>
           {search||hit ? renderList(): null}
          <div><small>Popular brands --</small></div>
          {comp.map((val)=> <button key={val.id} onClick={()=> modelPage(val.id,val.name)} >{val.name}</button>)}
         
      
    </main>
  );
}


  export default Company;


  
