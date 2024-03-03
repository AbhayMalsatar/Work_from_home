import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigate() {
    const navigate = useNavigate();
    function nav() {
        navigate('/location', {state : "Abhay"})
    }
  return (
    <div>
      <button onClick={nav}>Navigate</button>
    </div>
  )
}
