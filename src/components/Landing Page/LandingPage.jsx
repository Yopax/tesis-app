import Link from 'next/link';
import React from 'react'

function LandingPage() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Landing Page</h1>

        <Link href="/login">
          <button className="bg-emerald-300 p-2 rounded-lg my-2  ">Login</button>
        </Link>
        <Link href="/dashboard">
          <button className="bg-emerald-300 p-2 rounded-lg my-2  ">Dashboard</button>
        </Link>
      </div>
    </>
  );
}

export default LandingPage