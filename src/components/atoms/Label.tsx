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



    return (
        <span 
            className="label" 
            id="label" 
            style={{ 
                left: `calc((${value}%) - 35px)`,
                height: `${height}`, 
                display: 'flex', 
                fontSize: `${labelSize}`, 
                transition: `left ${transitionDuration} ease-in-out`,
                color: `${labelColor}` 
            }}>
            {completed}%
        </span>
    );
}

export default Label;
