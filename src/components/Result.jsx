import React,{useState,useEffect} from "react";

function Result({IDV,companyReset,PREMIUM}){

// const fetchData = () => {
//   return fetch(`http://0.0.0.0:8000/motor/fourwheeler/idv-for-variant/${variantid}/`)
//         .then((response) => response.json())
//         .then((data) => {
//         setUser(data["data"])});
// }
// //handling depreciation rate according to year of registration
// const currentYear = new Date().getFullYear()
// let depreciation=0
// if(dateofreg==currentYear){
//   depreciation=0
// }
// else if(dateofreg==currentYear-1){
//    depreciation= 15/100
// }else if(dateofreg ==currentYear-2){
//   depreciation=20/100
// }else if(dateofreg==currentYear-3){
//   depreciation =30/100
// }else if(dateofreg==currentYear-4){
//   depreciation=40/100
// }else{
//   depreciation=50/100
// }
// // idv and premium calculation 
// function Calculate(){
//     if(user){
//      let IDV = (user.ex_showroom_price)*(1-depreciation)
//      console.log(IDV)
//      let finalpremium = IDV *(3.3/100)
//      console.log(finalpremium)

//     //third_party_premium division according to cc value
//      let third_party_premium=0
//      if(user.cc<=1000){
//       third_party_premium=2094
//      }else if(user.cc>1000 && user.cc<=1500){
//       third_party_premium=3416
//      }else{
//       third_party_premium=7897
//      }
//      console.log(third_party_premium)
    
//      finalpremium= finalpremium+third_party_premium
//      console.log(finalpremium)
//      let sum=IDV
//      console.log(Math.round(sum))
//      console.log(variantid)

//      //setting and displaying premium and IDV
//      setIdv(Math.round(sum));
//      setPremium(Math.round(finalpremium))
    
//     }

//   }


// useEffect(() => {
//   fetchData()
//   Calculate()
  
// },[])


  

// formulae
// IDV = ex-showroom price * (1-depreciation %)
// Own damage premium = IDV * 3.3%

console.log(IDV)  
  console.log(PREMIUM)

  return( <div >
    
    <h4 class=" text-center">Below is the estimated IDV & Premium amount of your car</h4>
    { 
    <div class="row result-box ms-3" >
      <div class="col-md-3 mt-md-4 px-5 ">
      <div>IDV</div>
      <div class="idv-premium">{IDV}</div>
      </div>
      <div class="col-md-3 mt-md-4 ">
      <div>Premium</div>
      <div class="idv-premium">{PREMIUM}</div>
      </div>
      
      <div class="col-md-6 mt-md-4 mx-auto ">
        <button class="calculate-again mx-5 "onClick={()=> companyReset()}>Calculate Again</button>
      <button class="view-plan-btn ">View Plan</button></div>
      

      
    </div>
}

    
  </div>);
  
}


export default Result