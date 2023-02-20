import React, { useEffect, useState } from "react";
 import Models from './Models.json'

function Fuel({modelname,variantPage}) { 
  const [value, setValue] = useState([]);
  let name="5 Series"
  let id = 156

  const fetchData = () => {
    return fetch("https://dummyjson.com/products/1")
          .then((response) => response.json())
          .then((data) => {setValue(data)
        // console.log(data)
    });
  }

  useEffect(() => {
    fetchData()
    
    
  },[])
  console.log(modelname)
  //example

  
// geting desired and distinct fuel type of selected model
var available_fueltype = [];
 Models.data[id].variants.map((val)=> available_fueltype.push(val['fuel_type']))
 available_fueltype= Array.from(new Set(available_fueltype))


console.log(available_fueltype)


  //example end

  
  return (
    <main>
      <h3>Select the fuel type</h3>
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
           {available_fueltype.map((val)=> <button key={val} onClick={()=>variantPage(val)} >{val}</button>)}

           {/* <button key="PETROL" onClick={()=>variantPage("PETROL")} >Petrol</button>
           <button key="DIESEL" onClick={()=>variantPage("DIESEL")}>Diesel</button>
           */}
      </ul>
    </main>
  );
  
}

export default Fuel;
