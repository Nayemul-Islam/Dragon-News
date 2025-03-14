import React, { useContext } from "react";
import NavBar from "./NavBar";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer, Slide } from "react-toastify";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.email.value = "";
    e.target.password.value = "";
    signIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Wrong Email or Password !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };

  return (
    <>
      <NavBar />
      <h1 className="text-2xl text-center mt-5 mb-5">Login your Account</h1>
      <form className="flex justify-center" onSubmit={handleLogin}>
        <div className="card bg-base-100 w-full  md:w-1/3 shadow-2xl">
          <fieldset className="fieldset">
            <label className="fieldset-label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              name="email"
              required
            />
            <label className="fieldset-label">Password</label>
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              name="password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              className="btn btn-outline btn-secondary w-full mb-1"
              onClick={handleGoogleLogin}
            >
              {" "}
              <FaGoogle></FaGoogle> Login With Google
            </button>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>
            If you do not have a Account, Please{" "}
            <Link to="/register">
              {" "}
              <button className="text-blue-700 font-bold underline">
                Sign Up.
              </button>
            </Link>{" "}
          </p>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
};

export default Login;
