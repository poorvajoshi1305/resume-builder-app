import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import UserProfile from "./UserProfile";
import UsersData from "./UsersData";
import UserEducation from "./UserEducation";
import UserExperience from "./UserExperience";
// import SignUp from "./signup";
// import SignIn from "./signin";
import Register from "./Register";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Resume from "./Resume";
// import SignIn from "./SignIn";
// import Users from './Users';
// import Messages from './Messages';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/userprofile" component={UserProfile} />
        <Route exact path="/usersdata" component={UsersData} />
        <Route exact path="/usereducation" component={UserEducation} />
        <Route exact path="/userexperience" component={UserExperience} />
        <Route exact path="/resume" component={Resume} />
        {/* <Route exact path="/signup" component={SignUp} /> */}
        {/* <Route exact path="/signin" component={SignIn} /> */}
        <Route exact path="/register" component={Register} />
        <Route exact path="/contactus" component={ContactUs} />
        {/* <Route exact path="/users" component={Users} /> */}
        {/* <Route exact path="/messages" component={Messages} /> */}
        {/* <Route exact path="/visitors" component={Visitors} /> */}
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
