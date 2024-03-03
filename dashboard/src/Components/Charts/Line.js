import React, { useState, useContext } from 'react';
import ReactApexChart from 'react-apexcharts';
import noteContext from '../Context/notes/NoteContext';

export default function Line() {
	const a = useContext(noteContext);
	const [type, setType] = useState('line');
	function handleonSelect(e) {
		setType(e.target.value);
	}
	let series = []
	let options = {}	

	if (type === "pie") {
		console.log("Pie Chart");
		series = [28, 29, 33, 36, 32, 32, 33]
		options = {
			chart: {
				width: 380,
				type: 'pie',
			},
			

			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200,
					},
					legend: {
						position: 'bottom'
					}
				}
			}]
		}
	} else {
		series = [
			{
				name: "High - 2013",
				data: [28, 29, 33, 36, 32, 32, 33]
			},

		]
		options = {
			chart: {
				height: 350,
				type: type,
				dropShadow: {
					enabled: true,
					color: '#000',
					top: 18,
					left: 7,
					blur: 10,
					opacity: 0.2
				},
				toolbar: {
					show: false
				}
			},
			dataLabels: {
				enabled: true,
			},
			stroke: {
				curve: 'smooth'
			},
			title: {
				text: 'Average High & Low Temperature',
				align: 'left'
			},
			grid: {
				borderColor: '#e7e7e7',
				row: {
					colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
					opacity: 0.5
				},
			},
			markers: {
				size: 1
			},
			xaxis: {
				categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
				title: {
					text: 'Month'
				}
			},
			yaxis: {
				title: {
					text: 'Temperature'
				},
				min: 5,
				max: 40
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
				floating: true,
				offsetY: -25,
				offsetX: -5
			}
		}


	}

	if (a.state.chart === 'All' || a.state.chart === 'line') {
		return (
			<div id='cha'>
				<select id='cha' className="form-select" onChange={handleonSelect} aria-label="Default select example">
					<option value="line" selected>Line</option>
					<option value="area">Area</option>
					<option value="bar">Bar</option>
					<option value="pie">Pie</option>
				</select>
	
				<div id="chart">
					<ReactApexChart options={options} series={series} type={type} height={380} />
				</div>
				<div id="html-dist"></div>
			</div>
		);
	}
}


