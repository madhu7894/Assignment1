import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ExpoButton = ({ buttonValue }) => {
  const { handleSetExpoValue } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetExpoValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default ExpoButton;