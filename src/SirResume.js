import { useEffect, useState } from "react";
import axios from 'axios';
import "./Resume.css";

// id: 1,
// theme: 0,
// userName: null,
// firstName: "Aary",
// lastName: "Joshi",
// jobTitle: "devloper",
// email: "aary@gmail.com",
// website: null,
// phoneNum: null,
// summary: null,
// profilePic: null,
// user: null,
function App() {
  //let userResume = null;
  const [userResume, setUserResume] = useState({});
  
  function fetchUserResume() {
    axios.get("http://localhost:8080/user/Profile/getProfile").then((response) => {
      //alert(response.data);
      //alert(JSON.stringify(response.data));
      setUserResume(response.data);
    })
  }

  useEffect(fetchUserResume);

  return (
    <div className="App">
      <h1>Resume</h1>
      <p>
        Empno : {userResume.userName} <br />
        Name : {userResume.firstName} <br />
        Salary : {userResume.lastName} <br /> 
      </p>
    </div>
  );
}

export default App;
