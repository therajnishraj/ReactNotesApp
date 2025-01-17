import React, { useState, useEffect } from 'react';

import '../style.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function About() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [sum, setSum] = useState(0);
  const [inputValue1, setInputValue1] = useState(''); // New state for input value
  const [inputValue2, setInputValue2] = useState(''); // New state for input valueF
  const [showHome, setShowHome] = useState(false);
  const incrementA = (b) => {
    console.log(b);
    setCountA(countA + parseInt(b.target.value));
  };
  const incrementB = () => {
    setCountB(countB + 1);
  };
  const incrementC = () => {
    setCountC(countC + 1);
  };
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value); // Update the input value state
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value); // Update the input value state
  };
  const handlesum = () => {
    const sum = parseInt(inputValue1) + parseInt(inputValue2);
    setSum(sum);
    console.log('sum=', sum);
  };

  useEffect(() => {
    console.log(countA + ',' + countB + ',' + countC);


    // eslint-disable-next-line
  }, [countA, countB, countC]);
  return (
    <div>
      <div>
        <button value={2} onClick={(event) => incrementA(event)}>
          Button 1
        </button>
        <button onClick={incrementB}>Button 2</button>
        <button onClick={incrementC}>Button 3</button>
        <div>
          {countA},{countB},{countC}
        </div>
        <div>
          <input
            type="text"
            value={inputValue1} // Bind the input to state
            onChange={handleInputChange1} // Handle input changes
            placeholder="Type something..."
          />
          <input
            type="text"
            value={inputValue2} // Bind the input to state
            onChange={handleInputChange2} // Handle input changes
            placeholder="Type something..."
          />

          <button value={2} onClick={handlesum}>
            Sum
          </button>
        </div>
        <p>sum is {sum}</p> {/* Display the input value */}
      </div>
    </div>
  );
}
export default About;
