import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <Routes>=
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
