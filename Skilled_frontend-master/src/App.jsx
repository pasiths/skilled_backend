import "./App.css";
import Navbar1 from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import JobDetail from "./Components/JobDetail";
import JobApplication from "./Components/JobApplication";
import Register from "./Components/Register";
import RegisterRec from "./Components/RegisterRec";
import VerifyAccount from "./Components/VerifyAccount";
import Login from "./Components/Login";
import PostJob from "./Components/PostJob";
import JobList from "./Components/JobList";
import UserProfile from "./Components/UserProfile";
import NavbarLogged from "./Components/NavbarLogged";
import Footer from "./Components/Footer";
import Home from "./Pages/HomePage";
import RecruiterLogin from "./Components/RecruiterLogin";

import { Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import { useEffect, useState } from "react";
import Jwt from "./utils/Jwt";

function App() {
  const [loginSuccess, setLoginSuccess] = useState(null);

  useEffect(() => {
    // Get loginSuccess message from localStorage on component mount
    const successMessage = localStorage.getItem("loginSuccess");
    if (successMessage) {
      setLoginSuccess(successMessage);
    }
  }, []);

  return (
    // <Router>
    //   <Navbar1 />
    //   <NavbarLogged />
    //   <Routes>
    //     {/* Define your routes here */}
    //     <Route path="/" element={<Home />} />
    //     <Route path="/jobs" element={<JobList />} />
    //     <Route path="/profile" element={<UserProfile />} />
    //     <Route path="/jobAdPage" element={<JobDetail />} />
    //     <Route path="/applyPage" element={<JobApplication />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/registerRec" element={<RegisterRec />} />
    //     <Route path="/postjob" element={<PostJob />} />
    //     <Route path="/loginRec" element={<RecruiterLogin />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/verify" element={<VerifyAccount />} />
    //   </Routes>
    //   <Footer />
    // </Router>

    <>
      <Jwt />
      {loginSuccess ? <NavbarLogged /> : <Navbar1 />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/jobAdPage" element={<JobDetail />} />
        <Route path="/applyPage" element={<JobApplication />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerRec" element={<RegisterRec />} />
        <Route path="/postjob" element={<PostJob />} />
        <Route path="/loginRec" element={<RecruiterLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<VerifyAccount />} />

        {/* Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

// import './App.css'
// // import Banner from './Components/Banner';
//  import Navbar1 from './Components/Navbar'
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import BannerRec from './Components/BannerRec';
// // import JobPortalContent from './Components/JobPortalContent';
// import JobDetail from './Components/JobDetail';
//  import JobApplication from './Components/JobApplication';
// // import CompanyProfile from './Components/CompanyProfile';
//  import Register from './Components/Register';
//  import RegisterRec from './Components/RegisterRec';
// // import UserProfile from './Components/UserProfile';
// // import Footer from './Components/Footer';
// // import JobList from './Components/JobList';
//  import VerifyAccount from './Components/VerifyAccount';
// import Login from './Components/Login';
//  import PostJob from './Components/PostJob';
// // import NavbarLogged from './Components/NavbarLogged';

// // function App() {

// //   return (
// //     <>

// //       <Navbar/>
// //       <NavbarLogged/>
// //       <Login/>
// //       <Register/>
// //       <RegisterRec/>
// //       <VerifyAccount/>
// //       <Banner/>
// //       <BannerRec/>
// //       <JobList/>
// //       <JobPortalContent/>
// //       <PostJob/>
// //       <JobDetail/>
// //       <JobApplication/>
// //       <CompanyProfile/>
// //       <UserProfile/>
// //       <Footer/>

// //     </>
// //   )
// // }

// // export default App

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import NavScrollExample from './Components/Navbar';
// // import Banner from './Components/Banner';
// import JobList from './Components/JobList';
// import UserProfile from './Components/UserProfile';
// // import { Navbar } from 'react-bootstrap';
// import NavbarLogged from './Components/NavbarLogged';
// import Footer from './Components/Footer';
// import Home  from './Pages/HomePage';
// import RecruiterLogin from './Components/RecruiterLogin';

// function App() {
//   return (
//     <Router>
//       <Navbar1/>
//       <NavbarLogged />
//       <Routes>

//         <Route path="/" element={<Home />} />
//         <Route path="/jobs" element={<JobList />} />
//         <Route path="/profile" element={<UserProfile />} />
//         <Route path="/jobAdPage" element={<JobDetail />} />
//         <Route path="/applyPage" element={<JobApplication />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/registerRec" element={<RegisterRec />} />
//         <Route path="/postjob" element={<PostJob />} />

//         <Route path="/loginRec" element={<RecruiterLogin />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/verify" element={<VerifyAccount />} />

//       </Routes>
//       <Footer/>
//     </Router>
//   );
// }

// export default App;
