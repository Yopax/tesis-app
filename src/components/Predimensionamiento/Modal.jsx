"use client";

import React from 'react';
import NumericInput from './NumericInput';
import NumericInputTwo from './NumericInputTwo';

const ModalWindow = ({ showModal, inputValue, onInputChange, onSave ,inputValueTwo, onInputChangeTwo }) => {
  return (
    <>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Datos previos</h2>
            <h4>Ln - Losa aligerada</h4>
            <NumericInput
              placeholder="Ingrese un valor numérico"
              value={inputValue}
              onChange={onInputChange}
            />
            <h4>Ln - Losa aligerada2</h4>
            <NumericInputTwo
            placeholder="Ingrese un valor numérico"
            value={inputValueTwo}
            onChange={onInputChangeTwo}
            />
            
            <button className="flex flex-col bg-blue-500 text-white px-4 py-2" onClick={onSave}>
              Guardar datos
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWindow;
