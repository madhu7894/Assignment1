import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const TanButton = ({ buttonValue }) => {
  const { handleSetTanValue } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetTanValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default TanButton;