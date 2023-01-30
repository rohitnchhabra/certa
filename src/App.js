import './App.css';
import React from 'react';

function App() {
  const [counter, setCounter] = React.useState(0);
  const [showReset, setShowReset] = React.useState(false);
  const [intervalId, setIntervalId] = React.useState(0);


  const handleStart = () => {
    const newIntervalId = setInterval(()=> {
      setCounter(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };

  const handlePause = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    setShowReset(true);
  }

  const handleReset = () => {
    setShowReset(false);
    setCounter(0);
  }

  return (
    <div className="App">
      <div>{counter}</div>
      {!intervalId ? !showReset && <button onClick={handleStart}>Start</button> : null}
      {intervalId ? !showReset && <button onClick={handlePause}>Pause</button> : null}
      {showReset && <button onClick={handleReset}>Reset</button>}

    </div>
  );
}

export default App;
