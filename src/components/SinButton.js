import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const SinButton = ({ buttonValue }) => {
  const { handleSetSinValue } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetSinValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default SinButton;