import React,{useState} from "react";

function Claims({rto}){
const [value,setValue]=useState()
  

  function Calculate(){
     let company =100;
     let fuel=1;
     let model= 20;
     let variant = 200;
     let rto=10;
     let sum= company+fuel+model+variant+rto
     
     console.log(sum)
     setValue(sum);
     

  }
  console.log(rto)
  return( <div >
    <h3>Do you file any claims in previous policy year?</h3>
    <button  value="YES" name="claims"  style={{ margin: 20 }}> Yes</button>
    <button  value="NO" name="claims"> No</button>
    <br/>
    <button onClick={Calculate}>Calculate</button>
    <label>{value}</label>
    
  </div>);
  
}


export default Claims