import { useEffect, useState } from 'react';

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 5; // 25 minutes

function App() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);

  useEffect(() => {
    if (secondsAmount === 0) {
      alert('Chegou')
      return;
    };

    setTimeout(() => {
      setSecondsAmount(state => state -1);
    }, 1000);
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div>
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  )
}

export default App
