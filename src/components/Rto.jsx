import React, { useEffect, useState } from "react";
import Rtos from "./Rtos.json"

function Rto({dateofreg,claimsPage}) { 
  const [value, setValue] = useState([]);
  const [search,setSearch]= useState('');
  const [hit,setHit]= useState(false);

//   const fetchData = () => {
//     return fetch("https://dummyjson.com/products")
//           .then((response) => response.json())
//           .then((data) => {setValue(data['products'])
        
//     });
//   }


  useEffect(() => {
    // fetchData()
    setValue(Rtos["data"])
    document.getElementById('model-input').addEventListener('click', renderList );
    
    
    
  },[])
//   console.log(value);
  //  console.log(Models["data"])
   
// for (const property in Models["data"]) {
//   console.log(`${property}`);
//   console.log(`${property.name}`)
// }
   console.log(dateofreg)

   const renderList = () =>{
    return(
      <div className="list-container" style={{
        overflow: "scroll",
        height: "116px",
        width: "211px",
        }}>
        {console.log(search)}
        {value.map((val)=> val['rto_code'].toLowerCase().includes(search.toLowerCase()) ? <div onClick={(()=>claimsPage(val['rto_code']))} key={val['id']} className="list-item">{val.rto_code}</div>:null)}
      
      </div>
    )
    }
 
  return (
    <main>
      <h1>RTO</h1>
      <input autoComplete="true"  id="model-input" list="data" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} onClick={()=>setHit(true)}/>
           {search||hit ? renderList(): null}
      <ul>
        {value && value.length > 0 && value.map((userObj, index) => (
            <button key={userObj.rto_code} onClick={()=> claimsPage(userObj.rto_code)} >{userObj.rto_code}</button>
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

