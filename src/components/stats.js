import React, {useEffect, useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import '../style/stats.css';

const Stats = props => {

    // data to be displayed
    // const [dis, OnDis] = useState([]);

    // show quiz 1 data on load
    // useEffect(() => {
    //     console.log(`actual`);
    //     console.log(props.stats);
    // });

    // switch between quiz data
    // const switchData = e => {
    //     if(e === "next")
    //     {
    //         // move forward
    //     }else
    //     {
    //         // move backwards
    //     }
    // }

    return(
        <div className="stats-cover">

            <div className="legend">
                <div className="legend-bar">
                    <div style={{backgroundColor: props.stats[0].color}}></div>
                    <p>{props.stats[0].title}</p>
                </div>
                <div className="legend-bar">
                    <div style={{backgroundColor: props.stats[1].color}}></div>
                    <p>{props.stats[1].title}</p>
                </div>
                <div className="legend-bar">
                    <div style={{backgroundColor: props.stats[2].color}}></div>
                    <p>{props.stats[2].title}</p>
                </div>
                <div className="legend-bar">
                    <div style={{backgroundColor: props.stats[3].color}}></div>
                    <p>{props.stats[3].title}</p>
                </div>
            </div>

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