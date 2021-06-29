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
            <div>
                {/* <ProgressBar value={value} 
                        // width="100%" 
                        // height="50px"
                        margin="0px 0px 200px 0px" 
                        // bgColor="red"
                        // progressColor="blue"
                    /> */}
                <ProgressBar 
                    value={value}
                    margin="0px 0px 0px 0px"
                    // labelSize="0.3rem"
                    // isLabelVisible={false}
                    // labelColor="black"
                    transitionDuration="0.5s"
                />
                <ProgressBar 
                    value={value} 
                    margin="100px 0px 0px 0px"
                    // labelColor="black"
                    transitionDuration="0.7s"
                />
                <ProgressBar 
                    value={value} 
                    margin="100px 0px 0px 0px" 
                    // labelColor="black"
                    transitionDuration="0.9s"
                />
                <ProgressBar 
                    value={value} 
                    margin="100px 0px 0px 0px" 
                    // labelColor="black"
                    transitionDuration="1.1s"
                />
            </div>
            <div style={{ margin: '100px 0px 0px 0px' }}>
                <button onClick={() => setValue(0)}>1</button>
                <button onClick={() => setValue(30)}>2</button>
                <button onClick={() => setValue(40)}>2</button>
                <button onClick={() => setValue(70)}>2</button>
                <button onClick={() => setValue(20)}>2</button>
                <button onClick={() => setValue(100)}>3</button>
            </div>
        </>
    );
}

export default App;
