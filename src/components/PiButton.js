import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const PiButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() =>handleSetDisplayValue(buttonValue)}>
      π
    </button>
  );
};

export default PiButton;