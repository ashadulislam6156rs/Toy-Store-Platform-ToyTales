import React, { useContext,  useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();

const LogIn = () => {
  const [handleEye, setHandleEye] = useState(false);
  const { userLogIn, setLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const hendleGoogleRegisterLogIn = () => {

    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Your LogIn Successful.");
        navigate(location.state || "/");
      })
      .catch((err) => {
        toast.error(`${err.message}`);
        return;
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    

    userLogIn(email, password)
      .then(() => {
        toast.success("Your LogIn Successful.");
        navigate(location.state || "/");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(`${err.message}`);
        return;
      });
  };




  return (
    <div>
      <title>Log In</title>
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto border border-[#258184] ">
          <form onSubmit={handleLogIn} className="card-body">
            <fieldset className="fieldset">
              <h1 className="text-xl font-bold text-center py-3 border-b border-base-300 text-[#258184]">
                Login your account
              </h1>
              <label className="label mt-5">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 text-gray-500 rounded-md px-3 py-2 focus:outline-0 focus:border-[#F75B5F] w-full"
                placeholder="Email"
              />
              <label className="label flex flex-col justify-end items-center gap-2 relative">
                <span className="w-full">Password</span>
                <input
                  type={handleEye ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter Your Password.."
                  className="border w-full border-gray-300 rounded-md px-3 py-2 focus:outline-0 focus:border-[#F75B5F]"
                />
                <div
                  onClick={() => setHandleEye(!handleEye)}
                  className="absolute right-3 bottom-2.5 text-sm text-[#258184]"
                >
                  {handleEye ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </div>
              </label>
              <div>
                <Link
                  to={"/forgotpassword"}
                  state={{ email: email }}
                  className="link link-hover text-[#F75B5F] text-sm"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-linear-to-r btn text-sm cursor-pointer w-full from-purple-600 to-pink-500 text-white rounded-full py-2 font-semibold mt-4 hover:opacity-90"
                >
                  Login
                </button>
              </div>
              <div className="flex items-center justify-center py-2">
                <span className="border-b border-b-gray-300 w-full mr-5 ml-5"></span>
                <span className="text-sm">or</span>
                <span className="border-b border-b-gray-300 w-full ml-5 mr-5"></span>
              </div>
              {/* Google  */}
              <div className="text-center">
                <Link
                  type="button"
                  onClick={hendleGoogleRegisterLogIn}
                  className="w-full cursor-pointer btn text-xs bg-transparent rounded-full py-2 transition-colors duration-700 ease-in-out border border-[#258184] font-semibold hover:opacity-90 hover:bg-[#e5e7ff]"
                >
                  <span className="pr-1 text-base">
                    <FcGoogle />
                  </span>
                  <span>Sign In With Google</span>
                </Link>
              </div>
              <h1 className="text-center py-4 text-sm">
                Dont't Have An Account ?{" "}
                <Link
                  to={"/signup"}
                  className="text-[#F75B5F] cursor-pointer hover:underline"
                >
                  Sign Up
                </Link>
              </h1>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
