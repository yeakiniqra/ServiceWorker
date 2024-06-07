import React from 'react';
import { useLocation } from 'react-router-dom';

const Display = () => {
  const { state } = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h3 className="text-lg font-bold text-white">Hi, {state.field1} {state.field2}</h3>
    <div className="text-lg font-normal text-white">First Name: <span className="font-normal text-green-400">{state.field1}</span></div>
    <div className="text-lg font-normal text-white">Last Name: <span className="font-normal text-green-500">{state.field2}</span></div>
    <div className="text-lg font-bold text-white">Total Timer Value: <span className="font-bold text-white">{state.timerValue}</span></div>
  </div>
  );
};

export default Display;
