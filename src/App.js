
import './App.css';
import Company from './components/Company'
import Model from './components/Model'
import Fuel from './components/Fuel'
import Claims from './components/Claims'
import CarVariant from './components/Carvariant';
import Date from './components/Date'
import Rto from './components/Rto'
import React,{useState} from "react"


function App() {

  // company page to model page states
  const[state,setState]=useState(0)
  const[id,setid]= useState([])
  const[brand,setBrand]=useState("")
  
  const[modelname, setModelName]= useState("")

// get data from company page and passing to model page
  function modelPage(data,name){
    
    setState(state+1)
    setid(data)
    setBrand(name)
  }

  function fuelPage(data){
    setState(state+1)
    setModelName(data)
  }
  let jsx=null
     
 if(state==0){
  jsx= <Company modelPage={modelPage}/>
 }else if(state==1){
  jsx= <Model  carid={id} brandname={brand} fuelPage={fuelPage}/>
 }else if(state==2){
  jsx= <Fuel modelname={modelname} />
 }else if(state==3){
  jsx=<CarVariant/>
 }else if(state==4){
  jsx=<Date />
 }else if(state==5){
  jsx=<Rto />
 }else if(state==6){
  jsx=<Claims/>
 }

  return(
    <>

    {jsx}
    
   {/* <Company/>
   <Model/>
   <Fuel/>
   <CarVariant/>
   <Date/>
   <Rto/>
   <Claims/> */}

   </>
  )
  
}


export default App;
