
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

  const[fuel,setFuel]=useState("")
  const[variant,setVariant]= useState("")
  const[dateofreg,setDateofreg]= useState("")
  const[rto,setRto]=useState("")

// get data from company page and passing to model page
  function modelPage(data,name){
    
    setState(state+1)
    setid(data)
    setBrand(name)
  }
// get data from model page to fuel page
  function fuelPage(data){
    setState(state+1)
    setModelName(data)
  }
// get data from fuel page to carvariant page
  function variantPage(data){
    setState(state+1)
    setFuel(data)
  }

  // variant page to date page
  function datePage(data){
    setState(state+1)
    setVariant(data)
    
  }
  //date page to rto page
  function rtoPage(data){
    setState(state+1)
    setDateofreg(data)
  }
  // rto page to claims page
  function claimsPage(data){
    setState(state+1)
    setRto(data)
  }
  //reset to company page
  function companyReset(){

    setState(0)
    setBrand("")
    setModelName("")
    setFuel("")
    setVariant("")
    setDateofreg("")
    setRto("")
  }
  //reset to model page
  function modelReset(){
    setState(1)
    setModelName("")
    setFuel("")
    setVariant("")
    setDateofreg("")
    setRto("")

  }
  //reset to fuel page

  function fuelReset(){
    setState(2)
    setFuel("")
    setVariant("")
    setDateofreg("")
    setRto("")
  }
  // reset to variant page

  function variantReset(){
 
    setState(3)
    setVariant("")
    setDateofreg("")
    setRto("")
  }
  // reset to date of registration page

  function dateofregReset(){

    setState(4)
    setDateofreg("")
    setRto("")
  }
  // reset to rto page
  function rtoReset(){

    setState(5)
    setRto("")
  }

  // switching component logic 
  let jsx=null
     
 if(state==0){
  jsx= <Company modelPage={modelPage}/>
 }else if(state==1){
  jsx= <Model  carid={id} brandname={brand} fuelPage={fuelPage}/>
 }else if(state==2){
  jsx= <Fuel modelname={modelname} variantPage={variantPage} />
 }else if(state==3){
  jsx=<CarVariant  fuel={fuel} datePage={datePage}/>
 }else if(state==4){
  jsx=<Date  variant={variant} rtoPage={rtoPage}/>
 }else if(state==5){
  jsx=<Rto dateofreg={dateofreg} claimsPage={claimsPage}/>
 }else if(state==6){
  jsx=<Claims rto={rto} companyReset={companyReset}/>
 }

  return(
    <>
   <div style={{ width: 500 }}><ul>
   {state>0 && <span> <button onClick={()=> companyReset()}>{brand}</button><span>&rarr;</span></span>}
    {state>1 && <span> <button onClick={()=>modelReset()}>{modelname}</button><span>&rarr;</span></span>}
   {state>2 && <span> <button onClick={()=>fuelReset()}>{fuel}</button><span>&rarr;</span></span>}
   {state>3 && <span> <button onClick={()=> variantReset()}>{variant}</button><span>&rarr;</span></span>}
    {state>4 && <span> <button onClick={()=> dateofregReset()}>{dateofreg}</button><span>&rarr;</span></span>}
    {state>5 &&<button onClick={()=> rtoReset()}>{rto}</button>}

    </ul></div>
    {jsx}
   </>
  )
  
}


export default App;
