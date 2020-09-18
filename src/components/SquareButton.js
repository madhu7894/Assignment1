import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const SquareButton = ({ buttonValue }) => {
  const { handleSetSquareValue } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetSquareValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default SquareButton;