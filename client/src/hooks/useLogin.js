import { useState } from "react";
import toast from "react-hot-toast";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login = async ({ username, password }) => {
    const success = handleInputsError({ username, password });
    if (!success) return;
    try {
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      if (data.status) {
        toast.success("Logged in successfully");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

const handleInputsError = ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all fields");
    return false;
  }
  return true;
};

export default useLogin;
