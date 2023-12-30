import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";


function BotonVolver() {
  return (
    <Link href="/dashboard">
      <button className="flex btn-sm mt-2 mx-6 h-4 items-center btn  text-sm font-semibold shadow-xs text-sky-700">
      <GoArrowLeft /> volver al dashboard
      </button>
    </Link>
  );
}

export default BotonVolver;
