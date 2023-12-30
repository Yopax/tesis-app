import Link from 'next/link';
import React from 'react'
import { FaPlus } from "react-icons/fa";




function CardPlus({title,enlace}) {
  return (
    <div className="card fondo w-[318px] h-40 shadow-xl">
      <div className="card-body fondo2 rounded-lg roun justify-center items-center">
        <div className="card-actions">
          <Link href={`${enlace}`}>
          <button className="btn  text-sm font-semibold text-sky-700">{title} <FaPlus /></button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default CardPlus