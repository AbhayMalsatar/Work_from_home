import React, { useState } from 'react';
import noteContext from './NoteContext';

export default function NoteState(props) {
    const s1 = {
        "chart" : 'All'
    }
    const [state, setState] = useState(s1);
    function update(chart) {
        setState({"chart" : chart})
    }

  return (
    <noteContext.Provider value={{state, update}}>
        {props.children}
    </noteContext.Provider>
  )
}
