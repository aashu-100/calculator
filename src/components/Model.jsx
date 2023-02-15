import React, { useEffect, useState } from "react";
import Models from './Models.json'

function Model({fuelPage,carid,brandname}) { 
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
   console.log(carid)
   console.log(brandname)
  
  return (
    <main>
      <h1>BMW Models</h1>
      <ul>
        {/* {value && value.length > 0 && value.map((userObj, index) => (
            <button key={userObj.id}>{userObj.title}</button>
          ))} 
           */}
           {/* {(()=>{
            let post=[]
            for(const x in Models["data"]){
              // post.push(<button>{x}</button>)
              let namedata=[]
              for(const y in x){
                namedata.push(<button>{y.name}</button>)
              }
              post.push(namedata)
            }
            return post
           })()} */}
           {Object.keys(Models.data).map((val)=><button key={Models.data[val]['id']} onClick={()=>fuelPage(Models.data[val]['name'])}>{Models.data[val]['name']}</button>)}
          
      </ul>
    </main>
  );
  
          }

export default Model;


// data[156].name