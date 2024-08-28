import React from "react";
import { PinContainer } from "../ui/3d-pin";

function DevelopmentStage() {
  return (
    <div className="bg-gray-50 text-black pb-6">
      <div className="w-5/6 m-auto py-8">
        <h2 className="text-3xl md:text-4xl font-bold py-6">
          Application Development Stages
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start">
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h5 className="flex items-center text-xl font-bold gap-4">
                <img src="/planing.svg" alt="" className="h-10" />
                Analysis
              </h5>
              <p className="py-2 text-base">
                We craft precise technical specs, aligning with your business,
                technology, and user requirements.
              </p>
            </div>
            <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h5 className="flex items-center text-xl font-bold gap-4">
                <img src="/graphic-design.svg" alt="" className="h-10" />
                Design
              </h5>
              <p className="py-2 text-base">
                We adapt the customer's corporate identity to the platform
                guidelines. We draw convenient and understandable interfaces.
              </p>
            </div>
            <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h5 className="flex items-center text-xl font-bold gap-4">
                <img src="/coding-language.svg" alt="" className="h-10" />
                Development
              </h5>
              <p className="py-2 text-base">
                We create an extensible architecture, write clean and stable
                code. We integrate with customer technologies.
              </p>
            </div>
          </div>
          <div className="md:hidden lg:block py-4 w-full h-auto max-w-md lg:max-w-xl mx-auto">
            <img
              className="w-full h-auto"
              src="/hopegif1@2x.png"
              alt="Description"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h5 className="flex items-center text-xl font-bold gap-4">
                <img src="/security.svg" alt="" className="h-10" />
                Testing
              </h5>
              <p className="py-2 text-base">
                We carry out functional testing and do bug fixes. We adapt the
                application to different phone resolutions.
              </p>
            </div>
            <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h5 className="flex items-center text-xl font-bold gap-4">
                <img src="/hosting 1.svg" alt="" className="h-10" />
                Launching
              </h5>
              <p className="py-2 text-base">
                We design the application page and publish it in the App Store
                and Google Play stores.
              </p>
            </div>
            <div className="p-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <h5 className="flex items-center text-xl font-bold gap-4">
                <img src="/application.svg" alt="" className="h-10" />
                Support
              </h5>
              <p className="py-2 text-base">
                We monitor the stability of the application, update it for new
                devices and versions of iOS and Android.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentStage;
