import React from 'react';
import ReactApexChart  from 'react-apexcharts';
import noteContext from '../Context/notes/NoteContext';
import { useContext } from 'react';
 
export default function Area() {
	const a = useContext(noteContext);
	const series = [{
		name: 'series1',
		data: [31, 40, 28, 51, 42, 109, 100]
	  }, {
		name: 'series2',
		data: [11, 32, 45, 32, 34, 52, 41]
	  }]
	  const options = {
		chart: {
		  height: 350,
		  type: 'area'
		},
		dataLabels: {
		  enabled: false
		},
		stroke: {
		  curve: 'smooth'
		},
		xaxis: {
		  type: 'datetime',
		  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
		},
		tooltip: {
		  x: {
			format: 'dd/MM/yy HH:mm'
		  },
		},
	  }


	if (a.state.chart === "All" || a.state.chart === "area") {
		return (
			<div id='cha'>
			  <div id="chart">
				<ReactApexChart options={options} series={series} type="area" height={350} />
			  </div>
			  <div id="html-dist"></div>
			</div>
		  );
	}
}


