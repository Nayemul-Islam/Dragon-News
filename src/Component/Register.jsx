import React, { useContext } from "react";
import NavBar from "./NavBar";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast, ToastContainer, Slide } from "react-toastify";

const setPlaceholder = (e) => {
  e.target.email.value = "";
  e.target.password.value = "";
  e.target.photoURL.value = "";
  e.target.name.value = "";
};
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const naviGate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const name = e.target.name.value;
    // const photoURL = e.target.photoURL.value;
    setPlaceholder(e);
    createUser(email, password)
      .then(() => {
        toast("Account Created Successfully!", {
          position: "top-right",
          autoClose: 700,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });
        setTimeout(() => {
          naviGate("/");
        }, 1000);
      })
      .catch();
  };
  return (
    <div>
      <NavBar />
      <h1 className="text-2xl text-center mt-5 mb-5">Register your Account</h1>
      <form className="flex justify-center" onSubmit={handleRegister}>
        <div className="card bg-base-100 w-full  md:w-1/3 shadow-2xl">
          <fieldset className="fieldset">
            <label className="fieldset-label">Your Name</label>
            <input
              type="name"
              className="input w-full"
              placeholder="Name"
              name="name"
              required
            />
            <label className="fieldset-label">Photo URL </label>
            <input
              type="name"
              className="input w-full"
              placeholder="Photo URL"
              name="photoURL"
              required
            />
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
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already have a Account? Please{" "}
            <Link to="/login">
              {" "}
              <button className="text-blue-700 font-bold underline">
                Login.
              </button>
            </Link>{" "}
          </p>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default Register;
