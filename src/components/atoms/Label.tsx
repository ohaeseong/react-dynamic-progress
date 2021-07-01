import React from 'react';

type Props = {
    labelColor?: string;
    labelSize?: string;
    labelAlignment?: string;
    value: number;
    height?: string;
    completed: number;
    transitionDuration?: string;
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
        left = `calc((${value}%) - ${value < 10 ? '0px' : value === 100 ? '35px' :  '25px'})`;
    }
    
    const labelStyle = {
        display: 'flex',
        position: 'absolute' as 'absolute',
        left: left,
        height: `${height}`,
        transition: `left ${transitionDuration || "1s"} ease-in-out`,
        fontSize: `${labelSize || "0.8rem"}`, 
        color: `${labelColor || '#f9f9f9'}`,
        bottom: `${labelAlignment === 'top' ? '13px' : ''}`,
        alignItems: 'center'
    };
    
    return (
        <span 
            id="label" 
            style={{...labelStyle}}>
            {completed}%
        </span>
    );
}

export default Label;
