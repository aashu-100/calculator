import React, { useEffect, useState } from "react";
import Rtos from "./Rtos.json"

function Rto({nextPage}) { 
  const [value, setValue] = useState([]);

//   const fetchData = () => {
//     return fetch("https://dummyjson.com/products")
//           .then((response) => response.json())
//           .then((data) => {setValue(data['products'])
        
//     });
//   }


  useEffect(() => {
    // fetchData()
    setValue(Rtos["data"])
    
    
    
  },[])
//   console.log(value);
  //  console.log(Models["data"])
   
// for (const property in Models["data"]) {
//   console.log(`${property}`);
//   console.log(`${property.name}`)
// }
   
  
  return (
    <main>
      <h1>RTO</h1>
      <ul>
        {value && value.length > 0 && value.map((userObj, index) => (
            <button key={userObj.rto_code} onClick={()=>nextPage()}>{userObj.rto_code}</button>
          ))} 
          

           {/* {(()=>{
            let post=[]
            for(const property in Rtos["data"]){
              post.push(<button>{property}</button>)
            }
            return post
           })()} */}
          
      </ul>
    </main>
  );
  
          }

export default Rto;

