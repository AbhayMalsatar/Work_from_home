import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useContext } from 'react';
import noteContext from '../Context/notes/NoteContext';
export default function Donut() {
	const a = useContext(noteContext);
	const series = [44, 55, 41, 17, 15]
	const options = {
	  chart: {
		type: 'donut',
	  },
	  responsive: [{
		breakpoint: 480,
		options: {
		  chart: {
			width: 200
		  },
		  legend: {
			position: 'bottom'
		  }
		}
	  }]
	}

	if (a.state.chart === 'All' || a.state.chart === 'pie') {
		return (
			<div id='cha'>
			  <div id="chart">
				<ReactApexChart options={options} series={series} type="donut" width={400} />
			  </div>
			  <div id="html-dist"></div>
			</div>
		  );
		
	}

}
