import React from 'react'
import { useState } from 'react';
import { useGeneralContext } from '../../app/context/GeneralContext';

function ComponentContext2() {
  const { getSavedData } = useGeneralContext();
  const savedData = getSavedData();
  const [displayedData, setDisplayedData] = useState([ ]);

  const handleShowData = () => {
    const data = getSavedData();
    console.log("Data:", data);
    setDisplayedData(data);
  };

  return (
    <div className="flex flex-col border border-solid p-8 mt-4">
      <p className="text-lg font-medium">Componente 2</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        onClick={handleShowData}
      >
        Mostrar  Componente 1
      </button>
      {displayedData.map((item, index) => (
        <div key={index} className="flex my-2">
          <p className="mr-2 font-bold">{item.description}:</p>
          <p className="mr-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
}



export default ComponentContext2
