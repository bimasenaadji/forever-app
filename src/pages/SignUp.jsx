import React, { useEffect, useState } from "react";
import FormTitle from "../components/ui/FormTitle";
import FormInput from "../components/ui/FormInput";
import SubscribeForm from "../components/ui/SubscribeForm";
import ButtonForm from "../components/ui/ButtonForm";
import { Link, useNavigate } from "react-router";
import { registerUser } from "../../services/auth.service";
import toast from "react-hot-toast";
import { useAuth } from "../../context/authContext";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await registerUser(name, email, password);

      toast.success("Registration successful! Please log in.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form
        className="flex flex-col items-center justify-center gap-y-7 mt-20"
        onSubmit={handleSubmit}
      >
        <FormTitle>Sign Up</FormTitle>
        <FormInput
          type={"text"}
          placeholder={"Name"}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          type={"email"}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          type={"password"}
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500">{error}</p>}
        <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[30%] flex justify-between mt-[-20px]">
          <p className="text-sm sm:text-base font-normal text-form">
            Already Have an Account ?
          </p>
          <Link
            to={"/login"}
            className="text-sm sm:text-base font-normal text-form hover:text-black"
          >
            Sign In
          </Link>
        </div>

        <ButtonForm disabled={loading}>
          {loading ? "Creating..." : "Create"}
        </ButtonForm>
      </form>
      <SubscribeForm className="mt-60" />
    </>
  );
};

export default SignUp;
