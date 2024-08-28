import React from "react";
import { CardContainer } from "../ui/3d-card";

const OurTeam = () => {
  return (
    <div className=" bg-gray-100 text-black">
      <div className="flex flex-col lg:flex-row items-center w-5/6 m-auto">
        <div className="pt-8 lg:pt-0   w-full lg:w-1/2 flex flex-col md:mr-12">
          <h2 className="text-4xl font-bold py-4">Our team</h2>
          <p className="pb-4">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
          <div className="flex justify-between md:my-6">
            <div className="flex flex-col mb-4">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                28
              </span>
              <span>team members</span>
            </div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                +100
              </span>
              <span>projects</span>
            </div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold">
                7 years
              </span>
              <span>in IT sphere</span>
            </div>
          </div>
          <p>
            All the necessary specialists - from a designer to a tester - are on
            our staff. We hire the best specialists in the market. It’s
            expensive but worth it.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <CardContainer className="inter-var">
            <img
              src="/img-61151@2x.png"
              alt="Team illustration"
              className="md:h-96 lg:h-auto "
            />
          </CardContainer>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
