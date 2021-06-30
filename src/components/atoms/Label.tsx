import React from 'react';
import './Label.css';

type Props = {
    labelColor?: string;
    labelSize?: string;
    labelAlignment?: string;
    value: number;
    height?: string;
    completed: number;
    transitionDuration: string;
};

const Label = ({
    labelAlignment,
    transitionDuration,
    labelSize,
    labelColor,
    value,
    height,
    completed,
}: Props) => {
    let left = `calc((${value}%) - ${value === 0 ? '-3px' : value < 10 ? '5px' : '35px'})`;
    if (labelAlignment && !labelColor) {
        labelColor = "#707070";
    }

    if (labelAlignment === "top") {
        left = `calc((${value}%) - ${value < 10 ? '-3px' : value === 100 ? '35px' : '25px'})`;
    }

    if (labelAlignment === "bottom") {
        left = `calc((${value}%) - ${value < 10 ? '5px' : value === 100 ? '35px' :  '25px'})`;
    }
    
    return (
        <span 
            className="label" 
            id="label" 
            style={{ 
                left: left,
                height: `${height}`,
                display: 'flex',
                bottom: `${labelAlignment === "top" ? '13px' : ''}`,
                fontSize: `${labelSize}`, 
                transition: `left ${transitionDuration} ease-in-out`,
                color: `${labelColor}` 
            }}>
            {completed}%
        </span>
    );
}

export default Label;
