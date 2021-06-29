import ProgressBar from './components/bar/ProgressBar';
import React, { useCallback, useState } from 'react';

const App = () => {
    const [value, setValue] = useState(30);

    const handleValue = useCallback((event: any) => {
        const newValue = parseInt(event.target.value, 10);
        setValue(newValue);
    }, []);

    return (
        <>
            <div>
                <ProgressBar value={value} width="100%" height="50px" margin="0px 0px 200px 000px" />
                <ProgressBar value={value} />
                <ProgressBar value={value} />
                <ProgressBar value={value} />
            </div>
            <input onChange={handleValue} />
            <button onClick={() => setValue(0)}>1</button>
            <button onClick={() => setValue(50)}>2</button>
            <button onClick={() => setValue(100)}>3</button>
        </>
    );
}

export default App;
