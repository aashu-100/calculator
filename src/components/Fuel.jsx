import React, { useEffect, useState } from "react";
// import Models from './Models.json'

function Fuel({modelname,variantPage}) { 
  const [value, setValue] = useState([]);

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
  
  return (
    <main>
      <h1>Fuel Type</h1>
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

           <button key="PETROL" onClick={()=>variantPage("PETROL")} >Petrol</button>
           <button key="DIESEL" onClick={()=>variantPage("DIESEL")}>Diesel</button>
          
      </ul>
    </main>
  );
  
}

export default Fuel;
