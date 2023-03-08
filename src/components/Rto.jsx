import React, { useEffect, useState } from "react";
import Rtos from "./Rtos.json"

function Rto({dateofreg,claimsPage}) { 
  const [value, setValue] = useState([]);
  const [search,setSearch]= useState('');
  const [hit,setHit]= useState(false);

  const fetchData = () => {
    return fetch("http://0.0.0.0:8000/motor/fourwheeler/api/rtos/")
          .then((response) => response.json())
          .then((data) => {setValue(data['data'])
        
    });
  }


  useEffect(() => {
    fetchData()
    // setValue(Rtos["data"])
    document.getElementById('model-input-rto').addEventListener('click', renderList );
    
    
    
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
      <div class="rectangle-drop" key="list" >
        {console.log(search)}
        {value.map((val)=> val['rto_code'].toLowerCase().includes(search.toLowerCase())||val['rto_name'].toLowerCase().includes(search.toLowerCase()) ? <div onClick={(()=>claimsPage(val['rto_code']))} key={val['id']} class="rectangle-drop-btn">{val.rto_code}&nbsp;({val.rto_name})</div>:null)}
      
      </div>
    )
    }
 
  return (
    <main>
      <h4 class=" text-center">Where is your registered?</h4>
      <div class=" row justify-content-center">
      <input autoComplete="true"  class="input-box" id="model-input-rto" list="data" placeholder="Search city or RTO" onChange={(e)=>setSearch(e.target.value)} onClick={()=>setHit(true)}/>
           {search||hit ? renderList(): null}
           </div>
           <br/>
      <ul>
        {value && value.length > 0 && value.slice(0,10).map((userObj, index) => (
            <button class="select-btn" key={userObj.rto_code} onClick={()=> claimsPage(userObj.rto_code)} >{userObj.rto_code}</button>
          ))} 
          

           {/* {(()=>{
            let post=[]
            for(const property in Rtos["data"]){
              post.push(<button>{property}</button>)
            }
            return post
           })()} */}
          
      </ul>
      <div><a href="#model-input-rto">Can't find your RTO? Search for it</a></div>
    </main>
  );
  
          }

export default Rto;

