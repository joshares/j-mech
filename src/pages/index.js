import React from "react";
import Image from "next/image";
import oneMech from "../../public/logo-dark.png";
import Link from "next/link";

const Index = () => {
  return (
    <div className="flex h-screen flex-1 flex-col justify-center px-6 pt-12 pb-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto"
          src={oneMech}
          alt="Your Company"
        />
        <h2 className="mt-10 text-left text-2xl font-bold leading-9 capitalize tracking-tight text-[#364a63]">
          Sign in
        </h2>
        <p className="text-[#526484] text-sm">
          Access your One-Mech account using your email address and password.
        </p>
      </div>

      <div className="mt-5 mb-10 sm:mx-auto sm:w-full sm:max-w-md shadow-sm p-6">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-[#344357]"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 pl-4 py-2 outline-[#0971fe] text-[#344357] shadow-sm ring-1 ring-inset ring-[#0971fe1a] placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#0971fe1a] sm:text-sm sm:leading-7"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-[#344357]"
              >
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-medium text-xs text-[#0971fe]">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 pl-4 py-2 outline-[#0971fe] text-[#344357] shadow-sm ring-1 ring-inset ring-[#0971fe1a] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0971fe1a] sm:text-sm sm:leading-7"
              />
            </div>
          </div>

          <div>
            <Link
              href={"/navigate"}
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#0971fe] px-3 py-2 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-[#0971fe] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0971fe]"
            >
              Access Account
            </Link>
          </div>
        </form>
      </div>
      <div className="mt-auto text-xs text-center grid">
        <hr className="" />
        <footer className="mt-5 text-[#8094ae]">
          © 2023 One-Mech • All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Index;
