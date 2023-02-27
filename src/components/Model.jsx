import React, { useEffect, useState } from "react";
import Models from './Models.json'

function Model({fuelPage,id,brandname}) { 
  const [value, setValue] = useState([]);
  const [search,setSearch]= useState('');
  const [hit,setHit]= useState(false);
  

  const fetchData = () => {
    return fetch(`http://0.0.0.0:8000/motor/fourwheeler/make/${id}/`,{
      method: "GET",
      
      
    })
          .then((response) => response.json())
          .then((data) => setValue(data["data"]));
  }

 
  useEffect(() => {
    let a= ''
    fetchData()
    document.getElementById('model-input').addEventListener('click', renderList );
      // console.log('data',this.value,this); 
      // //a= document.getElementById("data").value
      // //console.log(a)
      // fuelPage(this.value)
      
  
   
 

    
    
  },[])
  //  console.log(Models["data"])
   
// for (const property in Models["data"]) {
//   console.log(`${property}`);
//   console.log(`${property.name}`)
// }
   console.log(id)
   console.log(brandname)
  //  console.log(search)
  

  const renderList = () =>{
    return(
      <div className="list-container" style={{
        overflow: "scroll",
        height: "116px",
        width: "211px",
        }}>
        {console.log(search)}
        {Object.keys(value).map((val)=> value[val]['name'].toLowerCase().includes(search.toLowerCase()) ? <div onClick={(()=>fuelPage(value[val]['name'],value[val]['id']))} key={value[val]['id']} className="list-item">{value[val]['name']}</div>:null)}
      
      </div>
    )
    }
    //<div><small>No Results Found</small></div>


  return (
    <main>
      <h3>Which car do you drive?</h3>
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
           <input autoComplete="true"   id="model-input" list="data" placeholder="Search car Model" onChange={(e)=>setSearch(e.target.value)} onClick={()=>setHit(true)}/>
           {search||hit ? renderList(): null}
           {/* <datalist id="data">
           
           {Object.keys(Models.data).map((val)=><option  key={Models.data[val]['id']} >{Models.data[val]['name']}</option>)}
          
           </datalist> */}
           {Object.keys(value).map((val)=><button key={value[val]['id']} onClick={()=>fuelPage(value[val]['name'],value[val]['id'])}>{value[val]['name']}</button>)}
          
      </ul>
    </main>
  );
  
          }

export default Model;


// data[156].name