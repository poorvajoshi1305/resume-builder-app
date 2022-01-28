import React from "react";
import './Details.css';
import { useState } from "react";
import axios from 'axios'
// college
// degree
// grade
// startDate
// endDate
// currentEducation
function UserEducation() {
    const [validationError, setValidationError] = useState(false);
        const [college, setCollege] = useState("");
        const [degree, setDegree] = useState("");
        const [grade, setGrade] = useState("");
        const [startDate, setStartDate] = useState("");
        const [endDate, setEndDate] = useState("");
        const [currentEducation, setCurrentEducation] = useState("");
      
        const [userEducationList, setUserEducationList] = useState([]);
      
        const handleCollege = (e) => {
          setCollege(e.target.value);
        };

        const handleDegree = (e) => {
            setDegree(e.target.value);
          };
      
        const handleGrade = (e) => {
          setGrade(e.target.value);
        };
      
        const handleStartDate = (e) => {
          setStartDate(e.target.value);
        };
      
        const handleEndDate = (e) => {
          setEndDate(e.target.value);
        };

        const handleCurrentEducation = (e) => {
            setCurrentEducation(e.target.value);
          };
      
        const userEducation = async () => {
      
          if (college == "" || degree == "" || grade == "") {
            setValidationError(true);
            return;
          }
          
          const url = "http://localhost:8080/user/Profile/addEducation";
          const data = {
            college: college,
            degree: degree,
            grade: grade,
            startDate : startDate,
            endDate: endDate,
            currentEducation: currentEducation,
          };
          await axios.post(url, data);

          const newList = [userEducation, ...userEducationList];
          setUserEducationList(newList);
      
          // Clear in the End
          setCollege("");
          setDegree("");
          setGrade("");
          setStartDate("");
          setEndDate("");
          setCurrentEducation("");

          setValidationError(false);
        };
    return (
      <>
        <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8">
                <form id="regForm">
                    <h1 id="register">Education Details</h1>
                    <div className="all-steps" id="all-steps"> <span className="step"><i className="fa fa-user"></i></span> <span className="step"><i className="fa fa-map-marker"></i></span> <span className="step"><i className="fa fa-shopping-bag"></i></span> <span className="step"><i className="fa fa-car"></i></span> <span className="step"><i className="fa fa-spotify"></i></span> <span className="step"><i className="fa fa-endDate-phone"></i></span> </div>
                    <div className="">
                        <h6>College name</h6>
                        <p> <input placeholder="Enter College Name" name="college" tabindex="10"  value={college} onChange={handleCollege}
                  className={college == "" && validationError ? "border border-danger" : ""} /></p>
                    </div>
                    <div className="">
                        <h6>Degree</h6>
                        <p><input placeholder="Enter your Degree" name="degree" tabindex="10"  value={degree} onChange={handleDegree}
                  className={degree == "" && validationError ? "border border-danger" : ""} /></p>
                    </div>
                    <div className="">
                        <h6>Grade</h6>
                        <p><input placeholder="Enter Grade Obtained" name="grade" tabindex="10"  value={grade} onChange={handleGrade}
                  className={grade == "" && validationError ? "border border-danger" : ""} /></p>
                    </div>
                    <div className="">
                        <h6>Start Date</h6>
                        <p><input type="date"  name="startDate" tabindex="10"  value={startDate} onChange={handleStartDate}
                  className={startDate == "" && validationError ? "border border-danger" : ""} /></p>
                    </div>
                    <div className="">
                        <h6>End Date</h6>
                        <p><input type="date"  name="endDate" tabindex="10"  value={endDate} onChange={handleEndDate}
                  className={endDate == "" && validationError ? "border border-danger" : ""} /></p>
                    </div>
                    <div className="">
                        <h6>Current Efucation</h6>
                        <p> <input placeholder="Enter Current Efucation" name="currentEducation" tabindex="10"  value={currentEducation} onChange={handleCurrentEducation}
                  className={currentEducation == "" && validationError ? "border border-danger" : ""} /></p>
                    </div>
                    {/* <div className="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" className="mb-4" />
                        <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our services!</span>
                    </div> */}
                    <div class="mb-3">
                    <button type="submit" class="btn btn-block text-uppercase"onClick={userEducation}>
                    Submit
                    </button>
                    </div>
                    <div style={{overflow:"auto"}} id="nextprevious">
                        <div style={{float:"right"}}> <button type="button" id="prevBtn" onclick="nextPrev(-1)"><i className="fa fa-angle-double-left"></i></button> <button type="button" id="nextBtn" onclick="nextPrev(1)"><i className="fa fa-angle-double-right"></i></button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
      </>
    )
};
export default UserEducation;
