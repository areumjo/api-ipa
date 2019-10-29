import React from 'react';
import * as d3 from 'd3';
import Line from './Line.js';

const Chart = props => {
  const data = props.callBeer[0];
  // console.log(data)
  data['avg_score_year'] = Object.fromEntries(
    Object.entries(data['avg_score_year']).filter(([k,v]) => !(v === null)));
  console.log(data['avg_score_year']);
  return(
    <div>
      <p>Average rating:</p>
      <Line />
      {/* <svg
        className="lineChartSvg"
        width={width + margins.left + margins.right}
        height={height + margins.top + margins.bottom}>
        <g transform={`translate(${margins.left}, ${margins.top})`}>
          <XYAxis {...{ xScale, yScale, height, ticks, t }} />
          <Line data={data} xScale={xScale} yScale={yScale} lineGenerator={lineGenerator} width={width} height={height} />
        </g>
      </svg> */}
    </div>
  )
};

export default Chart;