import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({ field1: '', field2: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (window.timerWindow) {
      window.timerWindow.close();
    }
    const timerValue = localStorage.getItem('timerValue');
    navigate('/results', { state: { ...formData, timerValue } });
  };

  return (
    <div className="flex flex-col space-y-4 items-center justify-center min-h-screen bg-gray-900">
  <div className="text-2xl font-bold text-white">Fill the Form</div>
  <input 
    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
    name="field1" placeholder='First Name'
    value={formData.field1} 
    onChange={handleChange} 
  />
  <input 
    className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
    name="field2" placeholder='Last Name'
    value={formData.field2} 
    onChange={handleChange} 
  />
  <button 
    className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
    onClick={handleSubmit}
  >
    Submit
  </button>
</div>
  );
};

export default Form;
