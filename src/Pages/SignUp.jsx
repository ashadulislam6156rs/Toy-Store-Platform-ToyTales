import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const [handleEye, setHandleEye] = useState(false);
  const { userCreate, userUpdateProfile, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const hendleGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Your Acount Create Successful.");
        navigate("/")
      })
      .catch((err) => {
        toast.error(`${err.message}`);
        return;
      });
  };

  const hendleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.check.checked;

    const hasUpperCase = /(?=.*[A-Z])/.test(password);
    const hasLowerCase = /(?=.*[a-z])/.test(password);
    const hasMinLength = /.{6,}/.test(password);

    if (!checked) {
      toast.error("Please Accept Our Term & Conditions.");
      return;
    }
    if (!hasUpperCase) {
      toast.error("Please Enter at least one Uppercase.");
      return;
    }
    if (!hasLowerCase) {
      toast.error("Please Enter at least one Lowercase.");
      return;
    }
    if (!hasMinLength) {
      toast.error("Please Enter Minimum 6 length password.");
      return;
    }

    userCreate(email, password)
      .then((resUser) => {
        const user = resUser.user;
        userUpdateProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Your Acount Create Successful.");
            e.target.reset();
            navigate("/")
          })
          .catch((err) => {
            toast.error(`${err.message}`);
            return;
          });
      })
      .catch((err) => {
        toast.error(`${err.message}`);
        return;
      });
  };

  return (
    <div>
      <title>Sign Up</title>
      <div className="flex justify-center items-center min-h-screen rounded-2xl">
        <div className="w-full p-5 lg:py-15">
          <form
            onSubmit={hendleRegister}
            className="md:w-2/3 lg:w-3/6 mx-auto p-5 md:px-10 shadow-lg rounded-2xl bg-white border border-[#258184]"
          >
            <fieldset className="flex flex-col space-y-4">
              <h1 className="text-xl font-bold text-center py-3 border-b border-base-300 text-[#258184]">
                Sign Up your account
              </h1>
              <label className="label">Your Name</label>
              <input
                type="name"
                placeholder="Enter Name.."
                name="name"
                className="border text-gray-500 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
              />
              <label className="label">Photo URL</label>
              <input
                type="url"
                placeholder="Enter Photo URL"
                name="photo"
                className="border text-gray-500 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
              />
              <label className="label">Your Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Email.."
                className="border text-gray-500 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
              />
              <label className="label flex flex-col justify-end items-center gap-2 relative">
                <span className="w-full">Password</span>
                <input
                  type={handleEye ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter Password.."
                  className="border text-gray-500 w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                />
                <div
                  onClick={() => setHandleEye(!handleEye)}
                  className="absolute right-3 bottom-3 text-base text-[#258184]"
                >
                  {handleEye ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </div>
              </label>
              <label className="label text-[#258184] b">
                <input
                  type="checkbox"
                  name="check"
                  className="checkbox text-[#258184]"
                />
                Accept Our{" "}
                <Link className="text-[#F75B5F] cursor-pointer hover:underline">
                  Term & Conditions
                </Link>
              </label>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-linear-to-r w-full cursor-pointer btn text-base from-purple-600 to-pink-500 text-white rounded-full py-2 font-semibold mt-4 hover:opacity-90"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex items-center justify-center py-1">
                <span className="border-b border-b-gray-300 w-full mr-5 ml-5"></span>
                <span className="text-sm">or</span>
                <span className="border-b border-b-gray-300 w-full ml-5 mr-5"></span>
              </div>

              {/* Google */}
              <div className="text-center">
                <button
                  onClick={hendleGoogleRegister}
                  className="w-full cursor-pointer border border-[#258184] btn text-base bg-transparent rounded-full py-3 transition-colors duration-700 ease-in-out font-semibold hover:opacity-90 hover:bg-[#e5e7ff]"
                >
                  <span className="pr-1 text-xl">
                    <FcGoogle />
                  </span>
                  <span>Sign In With Google</span>
                </button>
              </div>

              <h1 className="text-center py-4 text-sm">
                Already Have An Account ?{" "}
                <Link
                  to={"/login"}
                  className="text-[#F75B5F] cursor-pointer hover:underline"
                >
                  LogIn
                </Link>
              </h1>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
