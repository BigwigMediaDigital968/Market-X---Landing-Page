"use client";

import { useEffect } from "react";
import { lead } from "@/lib/metaPixel";
import Navbar from "@/component/Navbar";

export default function ThankYouPage() {
  useEffect(() => {
    lead();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-bg-main">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Thank You!</h1>

          <p className="mt-5">
            Your account opening request has been submitted. Our team will
            contact you shortly.
          </p>
        </div>
      </div>
    </>
  );
}
