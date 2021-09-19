import React, { useState } from 'react';
import RecordButton from './RecordButton';
import Timer from './Timer';

const App = () => {
  const [started, setStarted] = useState(false);

  return (
    <div>
      <RecordButton setting={setStarted} />
      <Timer start={started} />
    </div>
  )
}

export default App