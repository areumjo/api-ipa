import React from 'react';
import * as d3 from 'd3';
import Line from './Line.js';
import XYAxis from './XYAxis.js';

const Chart = props => {
  const data = props.callBeer[0];
  data['avg_score_year'] = Object.fromEntries(
    Object.entries(data['avg_score_year']).filter(([k,v]) => !(v === null)));
  // console.log(data['avg_score_year']); // {2016: 4.615, 2017: 4.225128205128205, 2018: 4.149375, 2019: 4.225}
  let output = Object.entries(data['avg_score_year']).map(([name, value]) => ({name,value}));
  console.log(output); // [{ name: '2016', value: 4.615}, ... ]

  // *** d3 ***
  const parentWidth = 500;
  const margins = { top: 20, right: 20, bottom: 20, left: 30 };

  const width = parentWidth - margins.left - margins.right;
  const height = 300 - margins.top - margins.bottom;

  const ticks = 5;
  const t = d3.transition().duration(2000);

  // const xScale = d3.scaleBand()
  //   .domain(output.map(d => d.name))
  //   .rangeRound([0, width]).padding(0.1);
  const xScale = d3.scaleLinear()
    .domain(d3.extent(output, d => d.name))
    .range([0, width])
    .interpolate(d3.interpolateRound)
    .nice();

  const yScale = d3.scaleLinear()
    .domain(d3.extent(output, d => d.value))
    .range([height, 0])
    .nice();

  const lineGenerator = d3.line()
    .x(d => xScale(d.name))
    .y(d => yScale(d.value))
    .curve(d3.curveMonotoneX);

  return(
    <div>
      <p>Average rating:</p>
      {/* <Line data={output} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height}/> */}
      <svg
        className="lineChartSvg"
        width={width + margins.left + margins.right}
        height={height + margins.top + margins.bottom}>
        <g transform={`translate(${margins.left}, ${margins.top})`}>
          <XYAxis {...{ xScale, yScale, height, ticks, t }} />
          <Line data={output} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
        </g>
      </svg>
    </div>
  )
};

export default Chart;