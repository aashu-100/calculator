import React, { useEffect, useState } from "react";
import Models from './Models.json'

function CarVariant({fuel,datePage,modelId,id}) { 
    
  const [value, setValue] = useState([]);
  const [search,setSearch]= useState('');
  const [hit,setHit]= useState(false);


  const fetchData = () => {
    return fetch(`http://0.0.0.0:8000/motor/fourwheeler/make/${id}/`,{
      method: "GET",
      
      
    })
          .then((response) => response.json())
          .then((data) => setValue(data["data"][modelId]["variants"]));
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
   console.log(fuel)

   const fueltype = value.filter((variant)=> variant.fuel_type === fuel )
   

   const renderList = () =>{
    return(
      <div class="rectangle-drop" >
        {console.log(search)}
        {fueltype.map((val)=> val['name'].toLowerCase().includes(search.toLowerCase()) ? <div onClick={(()=>datePage(val['name'],val['id']))} key={val['id']} class="rectangle-drop-btn">{val.name}</div>:null)}
      
      </div>
    )
    }



   
  //  console.log(fueltype)
  
  return (
    <main>
      <h4 class=" text-center">what is your car variant?</h4>
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
            <div class=" row justify-content-center">
            <input autoComplete="true" class="input-box" id="model-input" list="data" placeholder="Search car variant" onChange={(e)=>setSearch(e.target.value)} onClick={()=>setHit(true)}/>
           {search||hit ? renderList(): null}
           </div>
           <br/>
          {
            fueltype.map((variant)=> <button class="select-btn" key={variant.id} onClick={()=> datePage(variant['name'],variant.id)}>{variant.name}</button>)
          }
      </ul>
    </main>
  );
  
          }

export default CarVariant;
// data[156].variants
// data[156].variants[0].name

