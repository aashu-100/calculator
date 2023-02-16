import React, { useEffect, useState } from "react";
import Models from './Models.json'

function CarVariant({fuel,datePage}) { 
    let id= 156
  const [value, setValue] = useState([]);

  const fetchData = () => {
    return fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => {setValue(data['products'])
        
    });
  }

 
  useEffect(() => {
    fetchData()
    
    
  },[])
  //  console.log(Models["data"])
   
// for (const property in Models["data"]) {
//   console.log(`${property}`);
//   console.log(`${property.name}`)
// }
   console.log(fuel)
   const fueltype = Models.data[id].variants.filter((variant)=> variant.fuel_type === fuel )
  //  console.log(fueltype)
  
  return (
    <main>
      <h1>Car Variant</h1>
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
           {/* {Object.keys(Models.data).map((val)=><button>{Models.data[id]['name']}</button>)} */}
           {/* {Models.data[id].variants.map((val)=>
            <button key={val.name}>{val.name}</button>
           )} */}
          {
            fueltype.map((variant)=> <button key={variant.id} onClick={()=> datePage(variant['name'])}>{variant.name}</button>)
          }
      </ul>
    </main>
  );
  
          }

export default CarVariant;
// data[156].variants
// data[156].variants[0].name

