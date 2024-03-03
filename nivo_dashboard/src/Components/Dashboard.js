import React from 'react';
import Bar from './Charts/Bar';
import Line from './Charts/Line';
import Pie from './Charts/Pie';
import Radar from './Charts/Radar';
import RadialBar from './Charts/RadialBar';
import BoxPlot from './Charts/BoxPlot';
import Scatter from './Charts/Scatter';
import Calender from './Charts/Calender';


function Dashboard() {
  return (
    <div className='Dashboard'>
      <Bar/>
      <div className='row'>
        <div className='col'><Pie/></div>
        <div className='col'><Radar/></div>
        <div className='col'><RadialBar/></div>
      </div>
      <div className='row'>
      <div className='col'><BoxPlot/></div>
      <div className='col'><Scatter/></div>
      </div>
      <Line/>
      <Calender/>
    </div>
  )
}

export default Dashboard
