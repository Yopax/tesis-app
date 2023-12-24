"use client";

import React from "react";
import { useState } from "react";
import ModalWindow from "@/components/Predimensionamiento/Modal";
import BotonVolver from "./BotonVolver";

const Predimensionamiento = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputValueOne, setInputValueOne] = useState("");
  const [inputValueTwo, setInputValueTwo] = useState("");
  const [resultado, setResultado] = useState("calcula algo");
  const [resultadoTwo, setResultadoTwo] = useState("calcula algo");

  const DatosPrevios = () => {
    setShowModal(true);
  };

  const Guardar = () => {
    setShowModal(false);
  };

  const Calcular = () => {
    const valorNumerico = parseFloat(inputValueOne);
    if (!isNaN(valorNumerico)) {
      const resultadoCalculado = valorNumerico / 25;
      setResultado(resultadoCalculado.toFixed(2));
    }
  };

  const CalcularTwo = () => {
    const valorNumerico = parseFloat(inputValueTwo);
    if (!isNaN(valorNumerico)) {
      const resultadoCalculado = valorNumerico / 2;
      setResultadoTwo(resultadoCalculado.toFixed(2));
    }
  };

  return (
    <>
      <div className="flex mx-6 my-6 space-x-6 "> 
        <div className="flex flex-col w-1/2 rounded-lg border-gray-300 border-solid border-4 bg-white h-[550px]">
          <div className="w-[240px]">
            <BotonVolver />
          </div>
          
          <div className="text-center mt-10">
            <h1 className="text-4xl font-bold mb-4">Predimensionamiento</h1>
            <button
              className="btn btn-lg bg-sky-800 m-6 h-4 items-center text-sm font-semibold shadow-xs text-white"
              onClick={DatosPrevios}
            >
              Datos previos
            </button>
            <button
              className="bg-amber-500 text-white px-4 py-2 mb-4 ml-4 rounded-lg"
              onClick={() => {
                Calcular();
                CalcularTwo();
              }}
            >
              Calcular datos
            </button>
            
            
            
          </div>

          <ModalWindow
            showModal={showModal}
            inputValue={inputValueOne}
            inputValueTwo={inputValueTwo}
            onInputChange={(e) => setInputValueOne(e.target.value)}
            onInputChangeTwo={(e) => setInputValueTwo(e.target.value)}
            onSave={Guardar}
          />
        </div>
        <div className="w-1/2 h-[550px] rounded-lg  border-gray-300 border-solid border-4 bg-white">
        <div className="mt-4">
          <h1>Resultados</h1>
              {resultado && <p>Resultado: {resultado}</p>}
            </div>
            <div className="mt-4">
              {resultadoTwo && <p>Resultado: {resultadoTwo}</p>}
            </div>
        </div>
      </div>
    </>
  );
};

export default Predimensionamiento;
