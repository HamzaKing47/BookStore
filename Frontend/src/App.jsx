import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";
import { Toaster } from "react-hot-toast";
import { userAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = userAuth();
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white light:bg-white light:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to={"/signup"} />}
          />
          <Route path="/signup" element={<Signup />} />\
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
