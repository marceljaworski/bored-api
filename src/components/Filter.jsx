import React from 'react'
import { useContext } from 'react';
import { BoredContext } from '../context/Bored';

function Filter() {
    const { typeFilter, task } = useContext(BoredContext);
    const handleChange = (event) => {
        typeFilter(event.target.value);
    };
  return (
    <select value={task.type} onChange={handleChange}>
        <option value="recreational">recreational</option>
        <option value="education">education</option>
        <option value="relaxation">relaxation</option>
        <option value="social">social</option>
    </select>
  )
}

export default Filter