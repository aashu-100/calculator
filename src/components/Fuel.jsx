import React, { useEffect, useState } from "react";
 import Models from './Models.json'

function Fuel({modelname,variantPage,modelId,id}) { 
  const [value, setValue] = useState([]);
  
  // let id = 156

  const fetchData = () => {
    return fetch(`http://0.0.0.0:8000/motor/fourwheeler/make/${id}/`,{
      method: "GET",
      
      
    })
          .then((response) => response.json())
          .then((data) => setValue(data["data"][modelId]["variants"]));
  }

  useEffect(() => {
    fetchData()
    
    
  },[])
  console.log(modelname)
   console.log(modelId)
  //example

  
// geting desired and distinct fuel type of selected model
var available_fueltype = [];
 value.map((val)=> available_fueltype.push(val['fuel_type']))
 available_fueltype= Array.from(new Set(available_fueltype))


console.log(available_fueltype)


  //example end
  // data[156].variants[0].fuel_type
  
  return (
    <main>
      <h4 class=" text-center">Select the fuel type</h4>
      <ul>
        {/* {value && value.length > 0 && value.map((userObj, index) => (
            <button key={userObj.id}>{userObj.title}</button>
          ))} 
           */}
           {/* {(()=>{
            let post=[]
            for(const property in Models["data"]){
              post.push(<button>{property}</button>)
            }
            return post
           })()} */}
           
            
           {available_fueltype.map((val)=><div class="row justify-content-center"> <button class="select-fuel-btn" key={val} onClick={()=>variantPage(val)} >{val}</button></div>)}
           

           {/* <button key="PETROL" onClick={()=>variantPage("PETROL")} >Petrol</button>
           <button key="DIESEL" onClick={()=>variantPage("DIESEL")}>Diesel</button>
           */}
      </ul>
    </main>
  );
  
}

export default Fuel;
