import ProgressBar from './components/molecules/ProgressBar';
import React, { useCallback, useState } from 'react';

const App = () => {
    const [value, setValue] = useState(0);

    const handleValue = useCallback((event: any) => {
        const newValue = parseInt(event.target.value, 10);
        setValue(newValue);
    }, []);

    return (
        <>
            <div style={{ width: '60rem', margin: '200px 0px 0px 200px' }}>
                <ProgressBar 
                    value={value}
                    margin="0px 0px 0px 0px"
                    labelAlignment="bottom"
                    transitionDuration="0.5s"
                />
                <ProgressBar 
                    value={value} 
                    margin="100px 0px 0px 0px"
                    progressColor="#f67676"
                    labelAlignment="top"
                    transitionDuration="0.7s"
                />
                <ProgressBar 
                    value={value} 
                    margin="100px 0px 0px 0px" 
                    progressColor="#eca95c"
                    transitionDuration="1.1s"
                />
            </div>
            <div style={{ margin: '100px 0px 0px 0px' }}>
                <button onClick={() => setValue(0)}>0%</button>
                <button onClick={() => setValue(10)}>10%</button>
                <button onClick={() => setValue(30)}>20%</button>
                <button onClick={() => setValue(50)}>50%</button>
                <button onClick={() => setValue(70)}>70%</button>
                <button onClick={() => setValue(100)}>100%</button>
            </div>
        </>
    );
}

export default App;
