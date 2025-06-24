import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import login from "../../assets/login.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const LogIn = () => {
  const { signInUser, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Sign in Successfully Done✅");
      })
      .catch((error) => {
        toast.error(
          "invalid email or password❗ please enter valid email or password"
        );
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Sign in Successfully Done✅");
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div className="w-11/12 mx-auto md:my-10 my-5">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center hidden md:block md:max-w-80 lg:text-left">
          <Lottie animationData={login}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className=" text-3xl text-center pt-3 font-semibold">
            Please Login Now!
          </h2>
          <div className="card-body">
            <form onSubmit={handleSignIn} className="fieldset">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="btn bg-purple-600 text-white mt-4"
              >
                Login
              </button>
            </form>

            <div className="divider h-2">OR</div>
            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <span className=" text-center mt-1">
              Don't have an account ? please{" "}
              <Link to="/register" className="hover:underline text-indigo-700">
                Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
