import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const signup = async ({
    name,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    console.log(
      "🚀 ~ useSignup ~  name",
      name,
      username,
      password,
      confirmPassword,
      gender
    );

    const success = handleInputsError({
      name,
      username,
      password,
      confirmPassword,
      gender,
    });
      console.log("🚀 ~ useSignup ~ name:",   name,
        username,
        password,
        confirmPassword,
        gender,)
    if (!success) return;
    setLoading(true);
    try {
      const response = await fetch("/api/v1/auth/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await response.json();
      console.log("🚀 ~ useSignup ~ data:", data)
      if (data.status) {
        toast.success("Account created successfully");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

const handleInputsError = ({
  name,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  if (!(name && username && password && confirmPassword && gender)) {
    toast.error("Please fill in all fields");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
