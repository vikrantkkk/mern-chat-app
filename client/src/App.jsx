import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Login />} />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
