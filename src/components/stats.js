import React, {useEffect, useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import '../style/stats.css';

const Stats = props => {

    // current quiz stats
    const [current, onCurrent] = useState([]);
    const [num, onNum] = useState(0);
    const [t, onT] = useState(0);

    // display data for first quiz by default
    useEffect(() => {
        if(current.length === 0 && props.stats.length > 0)
        {
            onCurrent(props.stats[0].stats);
            onNum(props.stats.length);
        }
    });

    // switch between quiz data
    const switchData = e => {
        alert(`t in ${t}`);
        if(e === "next")
        {
            // move forward
            onT(t + 1);
            if(t === num)
            {
                onCurrent(props.stats[0].stats);
                onT(0);
            }
            else
                onCurrent(props.stats[t].stats);

        }else
        {
            // move backwards
            onT(t - 1);
            if(t < 0)
            {
                onCurrent(props.stats[num - 1].stats);
                onT(num - 1);
            }
            else
                onCurrent(props.stats[t].stats);
        }
        alert(`t out ${t}`);
    }

    return(
        <div className="stats-cover">

            {/* legend */}
            {/* <div className="legend">
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
            </div> */}

            {/* pie chart */}
            <div className="chart">
                <PieChart
                    // data={props.stats}
                    data={current}
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

            {/* next/prev buttons */}
            <div className="chart-btns">
                <div onClick={() => {switchData("prev")}}>prev</div>
                <div onClick={() => {switchData("next")}}>next</div>
            </div>
        </div>
    )
}

export default Stats;