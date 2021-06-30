import React, { useEffect, useState } from 'react';
import Label from '../atoms/Label';
import './ProgressBar.css';

type Props = {
    value: number;
    width?: string;
    height?: string;
    margin?: string;
    bgColor?: string;
    progressColor?: string;
    borderRadius?: string;
    labelColor?: string;
    labelSize?: string;
    isLabelVisible?: boolean;
    transitionDuration?: string;
    transitionTimingFunction?: string;
    labelAlignment?: string;
}

const ProgressBar = ({ 
        value, 
        width, 
        height, 
        margin, 
        bgColor, 
        progressColor, 
        borderRadius,
        labelAlignment,
        labelSize,
        labelColor,
        isLabelVisible = true,
        transitionDuration,
        transitionTimingFunction = "ease-in-out",
     }: Props) => {

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
        <div style={{ margin: `${margin}`, position: 'relative' }}>
            {
                labelAlignment === "top" ? 
                    <Label 
                        completed={completed} 
                        value={value}
                        labelSize={labelSize}
                        labelColor={labelColor}
                        transitionDuration={transitionDuration}
                        labelAlignment={labelAlignment}
                    />  : <></>
            }
            <div className="background" style={{ width: `${width}`, height: `${height}`, background: `${bgColor}`, borderRadius: `${borderRadius}` }}>
                <span className="progress-wrap" id="progress-wrap" style={{ width: `${value}%`, transition: `width ${transitionDuration} ${transitionTimingFunction}` }}>
                    <span className="progress" style={{ backgroundColor: `${progressColor}` }}>
                        {
                            isLabelVisible && !labelAlignment ? 
                                <Label 
                                    completed={completed} 
                                    value={value} 
                                    labelSize={labelSize}
                                    labelColor={labelColor}
                                    transitionDuration={transitionDuration}
                                /> : <></>
                        }
                    </span>
                </span>
            </div>
            {
                labelAlignment === "bottom" ? 
                    <Label 
                        completed={completed} 
                        value={value}
                        labelSize={labelSize}
                        labelColor={labelColor}
                        transitionDuration={transitionDuration}
                        labelAlignment={labelAlignment}
                    />  : <></>
            }
        </div>
    );
}
export default ProgressBar;
