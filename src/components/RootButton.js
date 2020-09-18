import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const RootButton = ({ buttonValue }) => {
  const { handleSetRootValue } = useContext(NumberContext);
  return (
    <button className="function-button" type="button" onClick={() => handleSetRootValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default RootButton;