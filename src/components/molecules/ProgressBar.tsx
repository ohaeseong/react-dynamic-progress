import React, { useEffect, useState } from 'react';
import Label from '../atoms/Label';

type Props = {
    value: number;
    width?: string;
    height?: string;
    margin?: string;
    color?: string;
    trackColor?: string;
    borderRadius?: string;
    labelColor?: string;
    labelSize?: string;
    labelVisible?: boolean;
    transitionDuration?: string;
    transitionTimingFunction?: string;
    labelAlignment?: string;
};

const ProgressBar = ({ 
        value, 
        width, 
        height, 
        margin, 
        color, 
        trackColor, 
        borderRadius,
        labelAlignment,
        labelSize,
        labelColor,
        labelVisible = true,
        transitionDuration,
        transitionTimingFunction = "ease-in-out",
     }: Props) => {

    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        const labelElement = document.getElementById("label");
        const progressElement = document.getElementById("progress-wrap");

        if (!value && labelElement && progressElement) {
            progressElement.style.width = "0%";
            labelElement.style.left = "0%";
            setCompleted(0);
            return;
        }
        
        if (value > 100 && progressElement && labelElement) {
            progressElement.style.width = "100%";
            labelElement.style.left = "100%";
            setCompleted(100);
            return;
        }

        setCompleted(value);
    }, [value]);

    const bagroundStyle = {
        height: height || '15px',
        width: `${width}`,
        position: 'relative' as 'relative',
        background: color || '#E5E7E9',
        overflow: 'hidden',
        borderRadius: borderRadius || '3px'
    };

    const progressWrapStyle = {
        width: `${value}%`,
        transition: `width ${transitionDuration || '1s'} ${transitionTimingFunction}`,
        display: 'block',
        height: '100%'
    };

    const progressStyle = {
        backgroundColor: trackColor || '#706af3',
        display: 'block',
        height: '100%'
    };

    return (
        <div style={{ margin: `${margin}`, position: 'relative' }}>
            {
                labelVisible && labelAlignment === "top" ? 
                    <Label 
                        completed={completed} 
                        value={value}
                        labelSize={labelSize}
                        labelColor={labelColor}
                        transitionDuration={transitionDuration}
                        labelAlignment={labelAlignment}
                    />  : <></>
            }
            <div style={{ ...bagroundStyle }}>
                <span id="progress-wrap" className="progress-wrap" style={{ ...progressWrapStyle }}>
                    <span style={{...progressStyle }}>
                        {
                            labelVisible && !labelAlignment ? 
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
                labelVisible && labelAlignment === "bottom" ? 
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
