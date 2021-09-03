import React, {useEffect, useState} from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import '../style/stats.css';

const Stats = props => {

    // current quiz stats
    const [list, onList] = useState([]);
    const [current, onCurrent] = useState([]);
    const [num, onNum] = useState(0);

    // display data for first quiz by default
    useEffect(() => {
        if(current.length === 0 && props.stats.length > 0)
        {
            onList(props.stats);
            onCurrent(props.stats.slice(0, 4));
            onNum(props.stats.length);
        }
        
    }, [current.length, props.stats]);
    
    // switch between quiz data
    const switchData = e => {

        let ind = list.findIndex(x => x.title === current[3].title);
        let pos = Math.floor(ind / 4);
        
        if(e === "next")
        {
            // move forward
            if(pos === Math.floor(num / 4) - 1)
            {
                onCurrent(list.slice(0, 4));
                console.log(list.slice(0, 4));
            }
            else
            {
                onCurrent(list.slice(ind + 1, ind + 5));
                console.log(list.slice(ind + 1, ind + 5));
            }
        }else
        {
            // move backwards
            if(pos === 0 || pos < 0)
            {
                onCurrent(list.slice(num - 4));
                console.log(list.slice(num - 4));
            }
            else
            {
                onCurrent(list.slice(ind - 7, ind - 3));
                console.log(list.slice(ind - 7, ind - 3));
            }
        }
       
    }

    return(
        <div className="stats-cover">

            <div className="quiz-number">
                {
                    (current === undefined || current.length === 0 )
                    ? <div>Loading...</div>
                    : <h3>
                        {`Quiz ${Math.floor(list.findIndex(x => x.title === current[3].title) / 4) + 1}`}
                    </h3>
                }
            </div>

            {/* legend */}
            {
                (current === undefined || current.length === 0)
                ? 
                <div>Loading...</div>
                : 
                <div className="legend">
                    <div className="legend-bar">
                        <div style={{backgroundColor: current[0].color}}></div>
                        <p>{current[0].title}</p>
                    </div>
                    <div className="legend-bar">
                        <div style={{backgroundColor: current[1].color}}></div>
                        <p>{current[1].title}</p>
                    </div>
                    <div className="legend-bar">
                        <div style={{backgroundColor: current[2].color}}></div>
                        <p>{current[2].title}</p>
                    </div>
                    <div className="legend-bar">
                        <div style={{backgroundColor: current[3].color}}></div>
                        <p>{current[3].title}</p>
                    </div>
                </div>
            }

            {/* pie chart */}
            <div className="chart">
                <PieChart
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