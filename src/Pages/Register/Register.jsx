import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import register from "../../assets/register.json";
import Lottie from "lottie-react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser, googleSignIn, setUsers } = use(AuthContext);
  const [validPass, setValidPass] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const upperCaseRegx = /(?=.*[A-Z])/;
    const lowerCaseRegx = /(?=.*[a-z])/;
    if (password.length < 6) {
      setValidPass("Password must be at least 6 characters");
      return;
    }
    if (upperCaseRegx.test(password) === false) {
      setValidPass(
        "Please include at least one uppercase letter in your password.like(A-Z)"
      );
      return;
    }
    if (lowerCaseRegx.test(password) === false) {
      setValidPass(
        "Please include at least one lowercase letter in your password.like(a-z)"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        // console.log(result);
        updateUser(name, photo)
          .then(() => {
            // console.log("profile updated");
          })
          .catch((error) => {
            // console.log(error);
          });
        setUsers({ ...result.user, displayName: name, photoURL: photo });
        navigate("/");
        toast.success(
          "Congratulation Your Account Has Been Successfully Created !"
        );
      })
      .catch((error) => {
        // console.log(error);
      });

    // console.log(name, email, photo, password);
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        navigate("/");
        toast.success("Sign in Successfully Done✅");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="w-11/12 mx-auto md:my-10 my-5">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center text-indigo-700 hidden md:block md:max-w-80 lg:text-left">
          <Lottie animationData={register}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h2 className=" text-3xl text-center pt-3 font-semibold">
            Please Register Now!
          </h2>
          <div className="card-body">
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <div className="relative">
                <label className="label">Password</label>
                <input
                  name="password"
                  type={seePassword ? "password" : "text"}
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={() => setSeePassword(!seePassword)}
                  type="button"
                  className=" absolute top-7 cursor-pointer right-6"
                >
                  {seePassword ? (
                    <FaEye size={20}></FaEye>
                  ) : (
                    <FaEyeSlash size={20}></FaEyeSlash>
                  )}
                </button>
                <span className=" text-center text-red-600 text-sm">
                  {validPass}
                </span>
              </div>

              <button
                type="submit"
                className="btn bg-purple-600 text-white mt-4"
              >
                Register
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
              Already have an account ? please{" "}
              <Link to="/logIn" className="hover:underline text-indigo-700">
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
