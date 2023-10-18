import NavBar from "@/components/NavBar";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import deviceImage from "../../public/devices.svg";
import rocketImg from "../../public/rocket.svg";
import vaultImg from "../../public/vault.svg";
import wifiImg from "../../public/wifi.svg";

export default function Home() {
  // useEffect(() => {
  //   const axios = require("axios");

  //   const config = {
  //     method: "get",
  //     url: "https://api.vehicledatabases.com/vehicle-history/{vin}",
  //     headers: {
  //       "x-AuthKey": "{X-AUTHKEY}",
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <main className="h-full relative">
      <div className="min-h-[5em]">
        <NavBar />
      </div>
      <section className="grid items-center px-12 min-h-[85vh]">
        <div className="">
          <h1 className="text-3xl font-semibold mb-10">Welcome, Emmanuel!</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center">
            <Link
              href={"/overview"}
              className="rounded-md w-full text-center h-full grid gap-4 justify-center"
            >
              <Image src={deviceImage} alt="coins" className="mx-auto" />
              <p>Mechanic Management System</p>
            </Link>
            <Link
              href={"/overview"}
              className="rounded-md w-full text-center h-full grid gap-4 justify-center"
            >
              <Image src={vaultImg} alt="coins" className="mx-auto" />
              <p>Insurance</p>
            </Link>
            <Link
              href={"/overview"}
              className="rounded-md w-full text-center h-full grid gap-4 justify-center"
            >
              <Image src={rocketImg} alt="coins" className="mx-auto" />
              <p>Fleet Management</p>
            </Link>
            <Link
              href={"/overview"}
              className="rounded-md w-full text-center h-full grid gap-4 justify-center"
            >
              <Image src={wifiImg} alt="coins" className="mx-auto" />
              <p>Customer-As-A-Service</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
