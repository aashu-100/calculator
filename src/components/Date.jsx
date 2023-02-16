import React, { useEffect, useState } from "react";


function Date({variant,rtoPage}) { 
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
   
  console.log(variant)
  return (
    <main>
      <h1>When did you buy the car?</h1>
      <ul>
        {/* {value && value.length > 0 && value.map((userObj, index) => (
            <button key={userObj.id}>{userObj.title}</button>
          ))} 
           */}
           {(()=>{
            let post=[]
            for(let i=2008;i<=2023;i++){
              post.push(<button key={i} onClick={()=>rtoPage(i)}>{i}</button>)
            }
            return post
           })()}
          
      </ul>
    </main>
  );
  
          }

export default Date;

