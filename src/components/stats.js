import React, {useEffect, useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import '../style/stats.css';

const Stats = props => {

    return(
        <div className={`stats-cover`}>

            <h2>Quiz Statistics</h2>

            

            <div className="chart">
                <PieChart
                    data={[
                        { title: 'One', value: 10, color: 'rgba(43, 122, 226, 0.082)' },
                        { title: 'Two', value: 15, color: 'rgb(147, 184, 201)' },
                        { title: 'Three', value: 20, color: 'rgba(43, 122, 226, 0.507)' },
                        { title: 'Four', value: 55, color: 'rgba(43, 122, 226, 0.734)' }
                    ]}
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
                            fontSize: '5px',
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