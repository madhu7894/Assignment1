import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const CosButton = ({ buttonValue }) => {
  const { handleSetCosValue } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetCosValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default CosButton;