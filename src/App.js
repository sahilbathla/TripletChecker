import React, { useState } from 'react';
import Button from './components/Button/Button';
import CustomInput from './components/CustomInput/CustomInput';

import { helpers } from './utils/findTriangularTriplet';
import './App.css';

function App() {
  const [array, setArray] = useState([]);
  const [element, setElement] = useState(0);
  const [isTriangularTriplet, setIsTriangularTriplet] = useState(false);
  const [clicked, setClicked] = useState(false);

  const addElement = () => {
    if (element) {
      setArray([...array, element]);
      setElement('');
    }
  }

  const handleCheck = () => {
    setIsTriangularTriplet(helpers.hasTriangularTriplet(array))
    setClicked(true)
  }

  const handleClear = () => {
    setClicked(false);
    setArray([]);
    setElement('');
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Catch the triplets!! <span role="img">🏃‍♂️</span></h1>
        {array.length
          ? <span>Items in the array: [{array.map((el, i) =>
            `${el}${i === array.length - 1 ? '' : ','}`)}]
            </span>
          : null}

        {clicked ? isTriangularTriplet
          ? <span className="success">"Bingo!!, Found One"</span>
          : <span className="error">"Doesn't have any"</span>
          : null}

        <CustomInput
          title='Element'
          onAddElement={addElement}
          onSetElement={setElement}
          element={element} />
        <div className="buttons">
          <Button title='Add Element' onClick={addElement} />
          <Button title='Check' onClick={handleCheck} />
          <Button title='Clear' onClick={handleClear} />
        </div>

      </header>
    </div>
  );
}

export default App;
