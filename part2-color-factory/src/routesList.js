import React, { useState } from "react";

import { useParams, Link, redirect, useNavigate } from "react-router-dom";

export function ColorPicker() {
    const params = useParams()
    return <div className="color" style={{backgroundColor: params.color}}>
        <h1>You picked: {params.color}</h1>
      <Link to="/colors" ><button>Back</button></Link>
    </div>
}


export function NewColorForm({ addColor }) {
  const INITIAL_STATE = {
    color: ''
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.color.trim() !== '') {
      addColor({ ...formData });
      setFormData(INITIAL_STATE);
      navigate('/colors'); // Redirect to /colors after form submission
    } else {
      alert("Please input a color");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new color</h1>
      <div className="formGroup">
        <label htmlFor="color">Color: </label>
        <input
          id="color"
          type="text"
          name="color"
          placeholder="Enter color"
          value={formData.color}
          onChange={handleChange}
        />
      </div>

      <button>Add color</button>
      <Link to='/colors'><button type="button">Back</button></Link>
    </form>
  );
}


