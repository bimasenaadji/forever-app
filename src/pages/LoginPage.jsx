import React from "react";
import FormTitle from "../components/ui/FormTitle";
import FormInput from "../components/ui/FormInput";
import ButtonForm from "../components/ui/ButtonForm";
import { Link, useNavigate } from "react-router";
import SubscribeForm from "../components/ui/SubscribeForm";
import { loginUser } from "../../services/auth.service";
import { useState } from "react";
import { useAuth } from "../../context/authContext.jsx";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loadingLogin, setLoading] = useState(false);

  const { login, loading } = useAuth();

  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Mencoba login dengan data:", { email, password });

    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
      toast.error(error.message || "Login failed.");
    } finally {
      setLoading(false);
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
        {/* 8. Tampilkan pesan error jika ada */}
        {error && <p className="text-red-500">{error}</p>}
        <div className="w-[50%] flex justify-between mt-[-20px]">
          <p className="text-base font-normal text-form">
            Forgot your password?
          </p>
          <Link to={"/sign-up"} className="text-base font-normal text-form">
            Create Account
          </Link>
        </div>
        <ButtonForm disabled={loadingLogin}>
          {loadingLogin ? "Loading..." : "Sign In"}
        </ButtonForm>
      </form>
      <SubscribeForm className="mt-60" />
    </>
  );
};

export default LoginPage;
