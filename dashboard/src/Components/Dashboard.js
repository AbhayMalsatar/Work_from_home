import React from 'react';
import Line from './Charts/Line';
import Area from './Charts/Area';
import RangeColumn from './Charts/RangeColumn';
import Pie from './Charts/Pie';
import Donut from './Charts/Donut';
import Candle from './Charts/Candle';
import Scatter from './Charts/Scatter';
import Mix from './Charts/Mix';
import '../App.css';
import { useRef, useContext } from 'react';
import { useReactToPrint } from "react-to-print";
import NoteContext from './Context/notes/NoteContext';




export default function Dashboard() {
    const a = useContext(NoteContext);
    console.log(a.state.chart);
    const conponentPDF= useRef();

    function handleOnSelect(e) {
        a.update(e.target.value);
    }

    const generatePDF= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Userdata",
        onAfterPrint:()=>alert("Data saved in PDF")
    });
    return (
        <>
            <button onClick={generatePDF} className='btn btn-primary' style={{margin:20}}> export</button>
            <select style={{marginBottom:10}} id='cha' onChange={handleOnSelect} className="form-select"  aria-label="Default select example">
				<option value="All" selected>All</option>
				<option value="line">Line</option>
				<option value="area">Area</option>
				<option value="bar">Bar</option>
				<option value="pie">Pie</option>
				<option value="candle">Candle</option>
				<option value="scatter">Scatter</option>
				<option value="mix">Mix</option>
			</select>
            <div ref={conponentPDF} style={{width:'100%'}}>
                <div>
                    <Line />
                </div>
                <div >
                    <Area />
                </div>
                
                <div>
                    <RangeColumn />
                </div>
                
                <div className='row'>
                    <div className='col'><Pie /></div>
                    <div className='col'><Donut /></div>
                </div>
                
                <div>
                    <Candle />
                </div>
                
                <div>
                    <Scatter />
                </div>
                <br></br>
                <div>
                    <Mix />
                </div>
            </div>
        </>
    )
}
