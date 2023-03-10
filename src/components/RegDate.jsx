import React, { useEffect, useState } from "react";



function RegDate({variant,rtoPage,variantid}) { 
  const [value, setValue] = useState([]);
  const [search,setSearch]= useState(0);
  const [hit,setHit]= useState(false);

 
  const currentYear = new Date().getFullYear()

  let post=[]
  

  const fetchData = () => {
    return fetch("https://dummyjson.com/products")
          .then((response) => response.json())
          .then((data) => {setValue(data['products'])
        
    });
  }

 
  useEffect(() => {
    fetchData()
    // getYear()
    document.getElementById('model-input').addEventListener('click', renderList );
    
    
  },[])
  //  console.log(Models["data"])
   
// for (const property in Models["data"]) {
//   console.log(`${property}`);
//   console.log(`${property.name}`)
// }

let scrollpost=[]
   
  console.log(variant)
  console.log(variantid)
  // console.log(currentYear)

  for(let i= currentYear-15;i<=currentYear;i++){
    scrollpost.push(i)
  }
  // console.log(scrollpost)
  
  const renderList = () =>{
    return(
      <div class="rectangle-drop">
        {console.log(search)}
        {scrollpost.map((val)=> val.toString().toLowerCase().includes(search.toString().toLowerCase()) ?<div onClick={(()=>rtoPage(val))} key={val} class="rectangle-drop-btn">{val}</div> : null)}
       

        
      
      </div>
    )
    }



  return (
    <main>
      <h4 class=" text-center">When did you buy the car?</h4>
      <ul>
        {/* {value && value.length > 0 && value.map((userObj, index) => (
            <button key={userObj.id}>{userObj.title}</button>
          ))} 
           */}
            <div class=" row justify-content-center">
           <input autoComplete="true" class="input-box"  id="model-input" list="data" placeholder="Search year" onChange={(e)=>setSearch(e.target.value)} onClick={()=>setHit(true)}/>
           {search||hit ? renderList(): null}
           </div>
           <br/>
           {(()=>{
            
            for(let i=2008;i<=2023;i++){
              post.push(<button class="select-btn" key={i} onClick={()=>rtoPage(i)}>{i}</button>)
            }
            return post
           })()}
          
      </ul>
    </main>
  );
  
          }

export default RegDate;

