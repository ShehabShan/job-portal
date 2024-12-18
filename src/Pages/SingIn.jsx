import { useContext, useRef, useState } from "react";
import singInLottieData from "../assets/lotti/singin.json";
import successLottieData from "../assets/lotti/succeess.json";
import AuthContext from "../Context/AuthContext/AuthContext";
import Lottie from "lottie-react";
import SocialLogin from "./shared/SocialLogin";

const SingIn = () => {
  const { user, singInUser } = useContext(AuthContext);

  const hanldeSingin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInUser(email, password)
      .then((Result) => {
        console.log(Result.user);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          {user ? (
            <Lottie animationData={successLottieData}></Lottie>
          ) : (
            <Lottie animationData={singInLottieData}></Lottie>
          )}
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold">Sing in!</h1>
          <form onSubmit={hanldeSingin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sing In"
                className="btn bg-blue-400 text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
