
import './App.css';
import Company from './components/Company'
import Model from './components/Model'
import Fuel from './components/Fuel'
import Claims from './components/Claims'
import CarVariant from './components/Carvariant';
import RegDate from './components/RegDate'
import Rto from './components/Rto'
import React,{useState} from "react"


function App() {

  // company page to model page states
  const[state,setState]=useState(0)
  const[id,setid]= useState([])
  const[brand,setBrand]=useState("")
  
  const[modelname, setModelName]= useState("")
  const[modelId,setmodelId]= useState(null)

  const[fuel,setFuel]=useState("")
  const[variant,setVariant]= useState("")
  const[variantid,setVariantid]= useState(0)
  const[dateofreg,setDateofreg]= useState("")
  const[rto,setRto]=useState("")

// get data from company page and passing to model page
  function modelPage(data,name){
    
    setState(state+1)
    setid(data)
    setBrand(name)
  }
// get data from model page to fuel page
  function fuelPage(name,id){
    console.log("Model selected")
    setState(state+1)
    setModelName(name)
    setmodelId(id)
  }
// get data from fuel page to carvariant page
  function variantPage(data){
    setState(state+1)
    setFuel(data)
  }

  // variant page to date page
  function datePage(name,varid){
    setState(state+1)
    setVariant(name)
    setVariantid(varid)
    
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
    setmodelId(null)

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
    setVariantid(null)
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
  jsx= <Model  id={id} brandname={brand} fuelPage={fuelPage}/>
 }else if(state==2){
  jsx= <Fuel id={id} modelId={modelId} modelname={modelname} variantPage={variantPage} />
 }else if(state==3){
  jsx=<CarVariant id={id} modelId={modelId}  fuel={fuel} datePage={datePage}/>
 }else if(state==4){
  jsx=<RegDate variantid={variantid} variant={variant} rtoPage={rtoPage}/>
 }else if(state==5){
  jsx=<Rto dateofreg={dateofreg} claimsPage={claimsPage}/>
 }else if(state==6){
  jsx=<Claims rto={rto} variantid={variantid} dateofreg={dateofreg} companyReset={companyReset}/>
 }

  return(
    <>
     <div class="container rectangle-copy mt-5">
    <h2 className='text-center my-4 '>Car Insurance Calculator</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
    <ul>
   {state>0 && <span> <button class="rectangle-2"onClick={()=> companyReset()}><span class="sigma-1-2 ">{brand}</span></button></span>}
    {state>1 && <span> <button class="rectangle-2" onClick={()=>modelReset()}><span class="sigma-1-2 ">{modelname}</span></button></span>}
   {state>2 && <span> <button class="rectangle-2" onClick={()=>fuelReset()}><span class="sigma-1-2 ">{fuel}</span></button></span>}
   {state>3 && <span> <button class="rectangle-2" onClick={()=> variantReset()}><span class="sigma-1-2 ">{variant}</span></button></span>}
    {state>4 && <span> <button class="rectangle-2" onClick={()=> dateofregReset()}><span class="sigma-1-2 ">{dateofreg}</span></button></span>}
    {state>5 &&<span><button class="rectangle-2" onClick={()=> rtoReset()}><span class="sigma-1-2 ">{rto}</span></button></span>}

    </ul>
    </div>
    </div>
  
    <div class="row justify-content-center">
      <div class="col-md-10 ">
    {jsx}
    </div>
    
    </div>
    </div>
   </>
  )
  
}


export default App;
