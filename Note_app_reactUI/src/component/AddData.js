import React, { useState, useEffect } from 'react';
import '../style.css';

export default function AddData() {
  // const navigate = useNavigate();
  // const history = useHistory();
  const [goto, setGoto] = useState(false);
  const handleGoto = () => {
    navigate('/home');
    setGoto(true);
  };
  return (
    <>
      <div>Hello !!!</div>
      <button onClick={handleGoto}>go to home</button>
      {/*  { goto
        ? <Home /> :"Hello" 
      } */}
    </>
  );
}
