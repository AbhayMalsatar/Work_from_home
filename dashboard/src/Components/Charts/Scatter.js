import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useContext } from 'react';
import noteContext from '../Context/notes/NoteContext';
export default function Scatter() {
	const a = useContext(noteContext);
	function generateDayWiseTimeSeries(baseval, count, yrange) {
		var i = 0;
		var series = [];
		while (i < count) {
		  var x = baseval;
		  var y =
			Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
	  
		  series.push([x, y]);
		  baseval += 86400000;
		  i++;
		}
		return series;
	  }
	const series = [{
		name: 'TEAM 1',
		data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
		  min: 10,
		  max: 60
		})
	  },
	  {
		name: 'TEAM 2',
		data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
		  min: 10,
		  max: 60
		})
	  },
	  {
		name: 'TEAM 3',
		data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
		  min: 10,
		  max: 60
		})
	  },
	  {
		name: 'TEAM 4',
		data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
		  min: 10,
		  max: 60
		})
	  },
	  {
		name: 'TEAM 5',
		data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
		  min: 10,
		  max: 60
		})
	  },
	]
	const options = {
	  chart: {
		height: 350,
		type: 'scatter',
		zoom: {
		  type: 'xy'
		}
	  },
	  dataLabels: {
		enabled: false
	  },
	  grid: {
		xaxis: {
		  lines: {
			show: true
		  }
		},
		yaxis: {
		  lines: {
			show: true
		  }
		},
	  },
	  xaxis: {
		type: 'datetime',
	  },
	  yaxis: {
		max: 70
	  }
	}

	if (a.state.chart === "All" || a.state.chart === 'scatter') {
		return (
			<div id='cha'>
			<div id="chart">
			  <ReactApexChart options={options} series={series} type="scatter" height={350} />
			</div>
			<div id="html-dist"></div>
		  </div>
		  )
	}
}
