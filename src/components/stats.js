import React, {useEffect, useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import '../style/stats.css';

const Stats = props => {

    return(
        <div className={`stats-cover`}>

            <h2>Quiz Statistics</h2>

            <div className="chart">
                <PieChart
                    data={props.stats}
                    lineWidth="60" animate={true} animationDuration="2000"
                    label={({ x, y, dx, dy, dataEntry }) => (
                        <text
                          x={x}
                          y={y}
                          dx={dx}
                          dy={dy}
                          dominant-baseline="central"
                          text-anchor="middle"
                          style={{
                            fontSize: '4px',
                            fontFamily: 'sans-serif',
                          }}
                        >
                          {Math.round(dataEntry.percentage) + '%'}
                        </text>
                      )}
                />
            </div>
        </div>
    )
}

export default Stats;