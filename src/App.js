import React, { useState } from 'react';
import RecordButton from './RecordButton';
import Timer from './Timer';

const App = () => {
  const [started, setStarted] = useState(false);
  const [set, Reset] = useState(false);

  return (
    <div>
      <RecordButton setting={setStarted} reset={Reset} set={set} />
      <Timer start={started} reset={set} />
    </div>
  )
}

export default App