import React,{useState} from "react";

function Claims({rto,companyReset}){
const [value,setValue]=useState()
const [show,setShow]=useState(false)
  

  function Calculate(){
     let company =100;
     let fuel=1;
     let model= 20;
     let variant = 200;
     let rto=10;
     let sum= company+fuel+model+variant+rto
     
     console.log(sum)
     setValue(sum);
     setShow(true)
     

  }
  console.log(rto)
  return( <div >
    <h3>Do you file any claims in previous policy year?</h3>
    <button  value="YES" name="claims"  style={{ margin: 20 }}> Yes</button>
    <button  value="NO" name="claims"> No</button>
    <br/>
    <button onClick={Calculate} style={{ margin: 20 }}>Calculate</button>
    { show &&
    <div className="box" style={{ margin: 20 }}>
      <div>
      <div>IDV</div>
      <div style={{ color: 'blue' }}>{value}</div>
      </div>
      <div>
      <div>Premium</div>
      <div style={{ color:'blue' }}>{value}</div>
      </div>
      <div><button onClick={()=> companyReset()}>Calculate Again</button></div>
      <div><button>View Plan</button></div>

      
    </div>
}
    
  </div>);
  
}


export default Claims