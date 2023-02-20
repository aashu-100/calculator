import React, { useEffect, useState } from "react";


function Date({variant,rtoPage}) { 
  const [value, setValue] = useState([]);
  const [search,setSearch]= useState(0);
  const [hit,setHit]= useState(false);

  let post=[]
  

  const fetchData = () => {
    return fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => {setValue(data['products'])
        
    });
  }

 
  useEffect(() => {
    fetchData()
    document.getElementById('model-input').addEventListener('click', renderList );
    
    
  },[])
  //  console.log(Models["data"])
   
// for (const property in Models["data"]) {
//   console.log(`${property}`);
//   console.log(`${property.name}`)
// }

let scrollpost=[]
   
  console.log(variant)
  for(let i=2008;i<=2023;i++){
    scrollpost.push(i)
  }
  // console.log(scrollpost)
  
  const renderList = () =>{
    return(
      <div className="list-container" style={{
        overflow: "scroll",
        height: "116px",
        width: "211px",
        }}>
        {console.log(search)}
        {scrollpost.map((val)=> val.toString().toLowerCase().includes(search.toString().toLowerCase()) ?<div onClick={(()=>rtoPage(val))} key={val} className="list-item">{val}</div> : null)}
       

        
      
      </div>
    )
    }



  return (
    <main>
      <h1>When did you buy the car?</h1>
      <ul>
        {/* {value && value.length > 0 && value.map((userObj, index) => (
            <button key={userObj.id}>{userObj.title}</button>
          ))} 
           */}
           <input autoComplete="true"  id="model-input" list="data" placeholder="Search year" onChange={(e)=>setSearch(e.target.value)} onClick={()=>setHit(true)}/>
           {search||hit ? renderList(): null}
           {(()=>{
            
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

