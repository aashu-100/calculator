

// import axios from "axios";

// let url='https://dummyjson.com/products/1'
// https://www.coverfox.com/motor/fourwheeler/api/vehicle-make/
 

import React, { useEffect, useState } from "react";


function Company({modelPage}) { 
  let data=30
  let name="BMW"
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

 

  return (
    <main>
      <h1>Car Brand</h1>
      
        {/* {user && user.length > 0 && user.map((userObj, index) => (
          
            <button key={userObj.id}>{userObj.name}</button>
          ))} */}
          <button onClick={()=> modelPage(data,name)} value="BMW">{name}</button>
      
    </main>
  );
}


  export default Company;


  
