import React from "react";
import './Details.css';
import { useState } from "react";
import axios from 'axios'
//    company
//    designation
//    description
//    startDate
//    endDate
//    currentJob
function UserExperience() {
    const [validationError, setValidationError] = useState(false);
        const [company, setCompany] = useState("");
        const [designation, setDesignation] = useState("");
        const [description, setDiscription] = useState("");
        const [startDate, setStartDate] = useState("");
        const [endDate, setEndDate] = useState("");
        const [currentJob, setCurrentJob] = useState("");
      
        const [UserExperienceList, setUserExperienceList] = useState([]);
      
        const handleCompany = (e) => {
          setCompany(e.target.value);
        };

        const handleDesignation = (e) => {
            setDesignation(e.target.value);
          };
      
        const handleDescription = (e) => {
          setDiscription(e.target.value);
        };
      
        const handleStartDate = (e) => {
          setStartDate(e.target.value);
        };
      
        const handleEndDate = (e) => {
          setEndDate(e.target.value);
        };

        const handleCurrentJob = (e) => {
            setCurrentJob(e.target.value);
          };
      
        const UserExperience = async () => {
      
          if (company == "" || designation == "" || description == "") {
            setValidationError(true);
            return;
          }
          
          const url = "http://localhost:8080/user/Profile/addExperience";
          const data = {
            company: company,
            designation: designation,
            description: description,
            startDate : startDate,
            endDate: endDate,
            currentJob: currentJob,
          };
          await axios.post(url, data);

          const newList = [UserExperience, ...UserExperienceList];
          setUserExperienceList(newList);
      
          // Clear in the End
          setCompany("");
          setDesignation("");
          setDiscription("");
          setStartDate("");
          setEndDate("");
          setCurrentJob("");

          setValidationError(false);
        };
    return (
      <>
        <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-8">
                <form id="regForm">
                    <h1 id="register">Experience Details</h1>
                    <div className="all-steps" id="all-steps"> <span className="step"><i className="fa fa-user"></i></span> <span className="step"><i className="fa fa-map-marker"></i></span> <span className="step"><i className="fa fa-shopping-bag"></i></span> <span className="step"><i className="fa fa-car"></i></span> <span className="step"><i className="fa fa-spotify"></i></span> <span className="step"><i className="fa fa-mobile-phone"></i></span> </div>
                    <div className="">
                        <h6>Company Name</h6>
                        <p> <input placeholder="Enter Company Name"   name="company" tabindex="10"  value={company} onChange={handleCompany}
                  className={company == "" && validationError ? "border border-danger" : ""} /></p>
                    </div>
                    <div className="">
                        <h6>Designation</h6>
                        <p><input placeholder="Enter Your Designation"   name="designation" tabindex="10"  value={designation} onChange={handleDesignation}
                  className={designation == "" && validationError ? "border border-danger" : ""} /></p>
                    </div>
                    <div className="">
                        <h6>Discription</h6>
                        <p><input placeholder="Enter Discription"   name="description" tabindex="10"  value={description} onChange={handleDescription}
                  className={description == "" && validationError ? "border border-danger" : ""} /></p>
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
                        <h6>Current Job</h6>
                        <p><input placeholder="Current Job"   name="currentJob" tabindex="10"  value={currentJob} onChange={handleCurrentJob}
                  className={currentJob == "" && validationError ? "border border-danger" : ""} /></p>
                    </div>
                    {/* <div className="thanks-message text-center" id="text-message"> <img src="https://i.imgur.com/O18mJ1K.png" width="100" className="mb-4" />
                        <h3>Thankyou for your feedback!</h3> <span>Thanks for your valuable information. It helps us to improve our services!</span>
                    </div> */}
                    <div class="mb-3">
                    <button type="submit" class="btn btn-block text-uppercase"onClick={UserExperience}>
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
export default UserExperience;
