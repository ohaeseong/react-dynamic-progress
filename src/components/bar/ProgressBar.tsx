import React, { useEffect, useState } from 'react';
import './ProgressBar.css';

type Props = {
    value: number;
    width?: string;
    height?: string;
    margin?: string;
    bgColor?: string;
    progressColor?: string;
}

const ProgressBar = ({ value, width, height, margin }: Props) => {
    const [completed, setCompleted] = useState(0);
    useEffect(() => {
        const labelElement = document.getElementById("label");
        const progressElement = document.getElementById("progress-wrap");
        setCompleted(value);

        if (!value) {
            progressElement.style.width = "0%";
            labelElement.style.left = "0%";
            setCompleted(0);
            return;
        }
        
        if (value > 100) {
            progressElement.style.width = "100%";
            labelElement.style.left = "100%";
            setCompleted(100);
            return;
        }
    }, [value]);

    return (
        <>
            <div className="background" style={{ width: `${width}`, height: `${height}`, margin: `${margin}` }}>
                <span className="progress-wrap" id="progress-wrap" style={{ width: `${value}%` }}>
                    <span className="progress"></span>
                </span>
            </div>
            <div className="label-wrap" style={{ width: `${width}` }}>
                <span className="label" id="label" style={{ left: `${value}%` }}>{completed}%</span>
            </div>
        </>
    );
}
export default ProgressBar;
