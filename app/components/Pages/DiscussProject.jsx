"use client";
import React from "react";
import { Vortex } from "../ui/vortex";

const DiscussProject = () => {
  return (
    <div className="bg-gray-100 mx-auto lg:h-[24rem] md:h-[36rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center bg-gray flex-col justify-center"
      >
        <div className="w-5/6 py-8 lg:h-[24rem] md:h-[30rem] m-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Part 1 */}
          <div className=" text-white text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-2">Let's discuss</h1>
            <h2 className="text-4xl font-bold mb-2">Your project</h2>
            <p className="text-lg my-6">
              Let's figure out how to create an effective application,<br></br>
              its cost and terms of its development
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
      </Vortex>
    </div>
  );
};

export default DiscussProject;
