import React from 'react'
import { useState } from 'react';
import { useGeneralContext } from '../../app/context/GeneralContext'

function ComponentContext1() {
  const { inputValues, setInputValues, saveAllData } = useGeneralContext();
  const [descriptions] = React.useState(["N° de pisos", "Peso específico del concreto", "Descripción 3", "Descripción 4", "Descripción 5"]);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };



  return (
    <>
      <div className="flex flex-col bg-gradient-to-tr from-slate-900 to-slate-700 border rounded-md m-2 border-solid p-6">
        <p className="font2 text-lg text-white font-semibold mb-4">Datos del Proyecto</p>
        {inputValues.map((value, index) => (
          <div key={index} className="flex my-2">
            <p className="flex font2 text-white text-sm items-center w-[130px] mr-2">
              {descriptions[index]}:
            </p>
            <input
              className="font2  h-7 w-[115px] text-xs rounded-[4px] border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600  "
              type="number"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={`Ingrese el valor `}
            />
          </div>
        ))}
        <button
          className="font2 font-semibold h-8 w-full rounded-md mt-4  bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 "
          onClick={() => saveAllData(descriptions)}
        >
          Guardar Datos
        </button>
      </div>
    </>
  );
}

export default ComponentContext1
