import React, { useEffect } from "react";
import FormTitle from "../components/ui/FormTitle";
import FormInput from "../components/ui/FormInput";
import ButtonForm from "../components/ui/ButtonForm";
import { Link, useNavigate } from "react-router";
import SubscribeForm from "../components/ui/SubscribeForm";
import { useState } from "react";
import { useAuth } from "../../context/authContext.jsx";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login, loading, isLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    setError(null);

    console.log("Mencoba login dengan data:", { email, password });

    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
      toast.error(error.message || "Login failed.");
    }
  };
  return (
    <>
      <form
        className="flex flex-col items-center justify-center gap-y-7 mt-20"
        onSubmit={handleLoginSubmit}
      >
        <FormTitle>Login</FormTitle>
        <FormInput
          type={"email"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] flex justify-between mt-[-20px]">
          <p className="text-sm sm:text-base font-normal text-form">
            Forgot your password?
          </p>
          <Link
            to={"/sign-up"}
            className="text-sm sm:text-base font-normal text-form hover:text-black"
          >
            Create Account
          </Link>
        </div>
        <ButtonForm disabled={loading}>
          {loading ? "Loading..." : "Sign In"}
        </ButtonForm>
      </form>
      <SubscribeForm className="mt-60" />
    </>
  );
};

export default LoginPage;
