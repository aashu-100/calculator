

// import axios from "axios";

// let url='https://dummyjson.com/products/1'
// https://www.coverfox.com/motor/fourwheeler/api/vehicle-make/
 

import React, { useEffect, useState } from "react";
// import Vehicles from './vehicle_make.json'


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

  const popular = comp.filter(
    (company) => company.is_popular==true
  );

  useEffect(() => {
     fetchData();
    document.getElementById('model-input').addEventListener('click', renderList );
  },[])

  const renderList = () =>{
    return(
      <div class="rectangle-drop" >
        {console.log(search)}
        {comp.map((val)=> val['name'].toLowerCase().includes(search.toLowerCase()) ? <div class="rectangle-drop-btn" onClick={(()=>modelPage(val.id,val.name))} key={val['id']} >{val.name}</div>:null)}
      
      </div>
    )
    }

 

  return (
    <main >
      <h4 class=" text-center">Which car do you drive?</h4>
      
        {/* {user && user.length > 0 && user.map((userObj, index) => (
          
            <button key={userObj.id}>{userObj.name}</button>
          ))} */}
          <div class=" row justify-content-center">
          <input autoComplete="true" class="input-box"  id="model-input" list="data" placeholder="Search Brand" onChange={(e)=>setSearch(e.target.value)} onClick={()=>setHit(true)}/>
           {search||hit ? renderList(): null}
          <div><small>Popular brands --</small></div>
          </div>
          <div >
          {popular.map((val)=> <button  key={val.id} onClick={()=> modelPage(val.id,val.name)} >{val.name}</button>)}
          </div>
         
      
    </main>
  );
}


  export default Company;


  
