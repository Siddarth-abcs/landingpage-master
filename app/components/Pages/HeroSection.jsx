"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative py-16 lg:py-0 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-grid-black/[0.2] bg-grid-white/[0.2] pointer-events-none"></div>

      <div className="relative w-11/12 m-auto lg:pt-48 lg:pb-32 hero">
        <div className="hero-content flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center pt-10 lg:text-left lg:max-w-xl">
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
          {/* Contact Section */}
          <div className="card bg-gray-100 lg:max-w-lg xl:max-w-xl w-full shrink-0 shadow-2xl mt-8 lg:mt-0">
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
              <div className="form-control mt-3 md:col-span-2">
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
