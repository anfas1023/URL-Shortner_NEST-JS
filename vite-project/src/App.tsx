import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./componenet/container/Container";
import Footer from "./componenet/Footer/Footer";
import Header from "./componenet/Header/Header";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";
import AuthUserContext, { AuthContext } from "./context/AuthContext";

export default function App() {
  return (
<AuthUserContext>
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              <Container />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </Router>
    </AuthUserContext>
  );
}
