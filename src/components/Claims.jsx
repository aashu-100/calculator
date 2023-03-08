import React,{useState,useEffect} from "react";

function Claims({rto,companyReset,variantid,dateofreg}){

const [show,setShow]=useState(false)
const [user,setUser]= useState()
const [idv,setIdv]= useState(0)
const [premium,setPremium]= useState(0)
  

const fetchData = () => {
  return fetch(`http://0.0.0.0:8000/motor/fourwheeler/idv-for-variant/${variantid}/`)
        .then((response) => response.json())
        .then((data) => {
        setUser(data["data"])});
}


useEffect(() => {
  fetchData()
  // getYear()
 
 
  
  
},[])

console.log(user)
if(user){
  console.log(user.cc)

  console.log(user.ex_showroom_price)
}
  

// formulae
// IDV = ex-showroom price * (1-depreciation %)
// Own damage premium = IDV * 3.3%

console.log(dateofreg)
//handling depreciation rate according to year of registration
const currentYear = new Date().getFullYear()
let depreciation=0
if(dateofreg==currentYear){
  depreciation=0
}
else if(dateofreg==currentYear-1){
   depreciation= 15/100
}else if(dateofreg ==currentYear-2){
  depreciation=20/100
}else if(dateofreg==currentYear-3){
  depreciation =30/100
}else if(dateofreg==currentYear-4){
  depreciation=40/100
}else{
  depreciation=50/100
}
// idv and premium calculation 

  function Calculate(){
    if(user){
     let IDV = (user.ex_showroom_price)*(1-depreciation)
     console.log(IDV)
     let finalpremium = IDV *(3.3/100)
     console.log(finalpremium)

    //third_party_premium division according to cc value
     let third_party_premium=0
     if(user.cc<=1000){
      third_party_premium=2094
     }else if(user.cc>1000 && user.cc<=1500){
      third_party_premium=3416
     }else{
      third_party_premium=7897
     }
     console.log(third_party_premium)
    
     finalpremium= finalpremium+third_party_premium
     console.log(finalpremium)
     let sum=IDV
     console.log(sum)
     console.log(variantid)

     //setting and displaying premium and IDV
     setIdv(sum);
     setPremium(finalpremium)
     setShow(true)
    }

  }
  console.log(rto)
  return( <div >
    
    <h4 class=" text-center">Do you file any claims in previous policy year?</h4>
    <div class="row justify-content-center">
    <button class="select-btn" value="YES" name="claims" onClick={Calculate}> Yes</button>
    <button class="select-btn" value="NO" name="claims" onClick={Calculate}> No</button>
    </div>
    <br/>
    
    { show &&
    <div className="box" style={{ margin: 20 }}>
      <div>
      <div>IDV</div>
      <div style={{ color: 'blue' }}>{idv}</div>
      </div>
      <div>
      <div>Premium</div>
      <div style={{ color:'blue' }}>{premium}</div>
      </div>
      <div><button onClick={()=> companyReset()}>Calculate Again</button></div>
      <div><button>View Plan</button></div>

      
    </div>
}
    
  </div>);
  
}


export default Claims