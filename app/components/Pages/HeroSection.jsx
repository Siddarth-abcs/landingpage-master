"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative py-16 lg:py-0">
      {/* Grid box */}
      <div className="absolute inset-0 w-full h-full dark:bg-white bg-white dark:bg-grid-black/[0.2] bg-grid-white/[0.2]"></div>

      <div className="lg:h-screen w-11/12 m-auto lg:pt-8 hero bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-between">
          {/* Text Part */}
          <div className="text-center pt-10 lg:text-left">
            <h1 className="text-4xl xl:text-5xl font-bold text-black">
              <span className="text-yellow-500">User-Centric Excellence</span>:
              Our App Development services Tackles Your Pain Points
            </h1>
            <p className="py-6 text-gray-700 text-xl">
              Experience a Seamless Digital Journey with
              <span className="text-green-500 font-bold"> Desun</span> - Where
              Every Line of Code Resolves Your Challenges and{" "}
              <span className="text-yellow-500 font-bold">
                Elevates Your App Experience
              </span>{" "}
              to Unparalleled Heights.
            </p>
          </div>
          {/* Contact Part */}
          <div className="card bg-gray-100 lg:max-w-lg xl:max-w-xl w-full shrink-0 shadow-2xl">
            <form className="card-body w-full grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Phone number</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  +91
                  <input
                    type="number"
                    className="grow"
                    placeholder="Phone number"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Business name</span>
                </label>
                <input
                  type="text"
                  placeholder="Business name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Business mail</span>
                </label>
                <input
                  type="email"
                  placeholder="Business mail"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-3">
                {/* for button can take col-span-1 md:col-span-2 */}
                <button className="btn btn-warning w-full">
                  Get Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
