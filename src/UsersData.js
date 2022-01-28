import React from "react";
// import "./Resume.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
function UsersData() {
    const [list, setList] = useState([]);

    const getResume = async () => {
      const url = "http://localhost:8080/user/Profile/getProfile";
      const result = await axios.get(url);
  
      const list = result.data;
      const newList = [...list];
      setList(newList);
    };
    useEffect(() => getResume(), []);
    return (
      <>
        {/* <div className="divform">
  <div className="container">
    <div className="row px-3 mt-5 mb-5">
      <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
        <div className="img-left d-none d-md-flex"></div> */}
        <ol><h1>Users Data</h1> 
        {/* <li> */}
        {list.map((item, index) =>(
              <li key={index}>
                  <p>{item.userName}</p>
                  <p>{item.firstName}</p>
                  <p>{item.lastName}</p>
                  {/* <p>{item.visitdate}</p> */}
                  {/* <p>{item.price}</p> */}
                  <hr />
                  </li>
          ))}
          {/* </li> */}
          </ol>
        {/* <div className="card-body">
        </div>
      </div>
    </div>
  </div> */}
{/* </div> */}
      </>
    )
};
export default UsersData;