import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const CotButton = ({ buttonValue }) => {
  const { handleSetCotValue } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetCotValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default CotButton;