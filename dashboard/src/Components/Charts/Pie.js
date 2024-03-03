import React from 'react';
import noteContext from '../Context/notes/NoteContext';
import { useContext } from 'react';
import ReactApexChart from 'react-apexcharts';

export default function Pie() {
	const a = useContext(noteContext);
	const series = [44, 55, 13, 43, 22]
	const options = {
		chart: {
			width: 380,
			type: 'pie',
		},
		labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
					<ReactApexChart options={options} series={series} type="pie" width={400} />
				</div>
				<div id="html-dist"></div>
			</div>
		)
	}
}
