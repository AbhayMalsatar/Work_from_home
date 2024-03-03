import React from 'react';
import { useState } from "react";

export default function State() {
    const [color, setColor] = useState("red");

    return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
      </>
    )
}
