"use client";
import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "../ui/navbar-menu";

const Navbar = ({
  onFAQClick,
  onContactClick,
  onindustriesClick,
  onDevelopmentStageClick,
  onOurTeamClick,
}) => {
  const [active, setActive] = useState();
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-11/12 absolute top-4 md:top-6 lg:top-8 xl:top-10 inset-x-0 mx-auto z-50">
      <Menu setActive={setActive}>
        <div className="w-full flex justify-between">
          <div className="w-full lg:w-auto flex justify-between lg:justify-start">
            <img
              className="self-stretch md:w-[184px] w-[164px] -ml-4  relative max-h-full object-contain min-h-[60px]"
              loading="lazy"
              alt="Company Logo"
              src="/logobg2-1@2x.png"
            />
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <div
                onClick={onindustriesClick}
                className="font-semibold text-gray-600 hover:text-gray-950"
              >
                Services
              </div>
              <div
                onClick={onOurTeamClick}
                className="font-semibold text-gray-600 hover:text-gray-950"
              >
                Media
              </div>
              <div
                onClick={onDevelopmentStageClick}
                className="font-semibold text-gray-600 hover:text-gray-950"
              >
                Cases
              </div>
              <div
                onClick={onFAQClick}
                className="font-semibold text-gray-600 hover:text-gray-950"
              >
                FAQ
              </div>
              <div
                onClick={onContactClick}
                className="font-semibold text-gray-600 hover:text-gray-950"
              >
                Contacts
              </div>
            </div>
            <div className="md:hidden block">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMenu(!menu)}
              >
                <span className="sr-only">Open main menu</span>
                {!menu ? (
                  <svg
                    className="block h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex">
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0 object-cover"
                alt=""
                src="/smartphone_outline_24.png"
              />
              <a>
                <span className="mr-1">+91</span>000000000
              </a>
            </div>
            <div className="flex">
              <img
                className="h-6 w-6 mr-1 relative overflow-hidden shrink-0 object-cover"
                alt=""
                src="/mail-outline-24@2x.png"
              />
              <a
                className=""
                href="mailto:thousanditcompany@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                demo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Menu>
      <div
        className={
          !menu
            ? "hidden"
            : "bg-gray-50 rounded-xl mt-4 text-center space-y-1 px-2 pb-3 pt-2 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
        }
      >
        <div
          onClick={onindustriesClick}
          className="block rounded-md px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-200 hover:text-black"
        >
          Services
        </div>
        <div
          onClick={onOurTeamClick}
          className="block rounded-md px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-200 hover:text-black"
        >
          Media
        </div>
        <div
          onClick={onDevelopmentStageClick}
          className="block rounded-md px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-200 hover:text-black"
        >
          Cases
        </div>
        <div
          onClick={onFAQClick}
          className="block rounded-md px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-200 hover:text-black"
        >
          FAQ
        </div>
        <div
          onClick={onContactClick}
          className="block rounded-md px-3 py-2 text-base font-semibold text-gray-800 hover:bg-gray-200 hover:text-black"
        >
          Contacts
        </div>
      </div>
    </div>
  );
};

export default Navbar;
