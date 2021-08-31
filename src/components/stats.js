import React, {useEffect, useRef, useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import '../style/stats.css';

const Stats = props => {

    // current quiz stats
    const [current, onCurrent] = useState([]);
    const [num, onNum] = useState(0);

    // display data for first quiz by default
    useEffect(() => {
        if(current.length === 0 && props.stats.length > 0)
        {
            // onCurrent(props.stats[0].stats);
            onCurrent(props.stats[0]);
            onNum(props.stats.length);
        }
    });

    // switch between quiz data
    const switchData = e => {

        let pos = props.stats.indexOf(current);
        if(e === "next")
        {
            // move forward
            if(pos === num - 1)
                onCurrent(props.stats[0]);
            else
                onCurrent(props.stats[pos + 1]);
        }else
        {
            // move backwards
            if(pos === 0 || pos < 0)
                onCurrent(props.stats[num - 1]);
            else
                onCurrent(props.stats[pos - 1]);
        }
    }

    return(
        <div className="stats-cover">

            {/* legend */}
            {
                (current.length === 0)
                ? 
                <div>Loading...</div>
                : 
                <div className="legend">
                    <div className="legend-bar">
                        <div style={{backgroundColor: current.stats[0].color}}></div>
                        <p>{current.stats[0].title}</p>
                    </div>
                    <div className="legend-bar">
                        <div style={{backgroundColor: current.stats[1].color}}></div>
                        <p>{current.stats[1].title}</p>
                    </div>
                    <div className="legend-bar">
                        <div style={{backgroundColor: current.stats[2].color}}></div>
                        <p>{current.stats[2].title}</p>
                    </div>
                    <div className="legend-bar">
                        <div style={{backgroundColor: current.stats[3].color}}></div>
                        <p>{current.stats[3].title}</p>
                    </div>
                </div>
            }

            {/* pie chart */}
            <div className="chart">
                <PieChart
                    data={current.stats}
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