import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const LogButton = ({ buttonValue }) => {
  const { handleSetLogValue } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetLogValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default LogButton;