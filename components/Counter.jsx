// Create components/Counter.jsx
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onClear, onCustom }) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={() => onIncrement(1}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}> Clear </button>
    <button onClick={() => onIncrement(5)}>Custom</button>
  </div>
);

export default Counter;
