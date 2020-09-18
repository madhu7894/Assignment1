import React from 'react';
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';
import CosButton from './CosButton';
import SinButton from './SinButton';
import PiButton from './PiButton';
import ExpoButton from './ExponentButton';
import TanButton from './TanButton';
import CotButton from './CotButton';
import RootButton from './RootButton';
import LogButton from './LogButton';
import SquareButton from './SquareButton';

import { CalculatorStyles } from './styles/Styles';

const Calculator = () => (
  <CalculatorStyles>
    <div className="display">
      <h1>CALCULATER</h1>
      <Display />
    </div>
    <div className="number-pad">
      <ClearButton />
      <BackButton />
      <NegativeButton />
      <FunctionButton buttonValue="/" />
      <RootButton buttonValue="√" />
      <SinButton buttonValue="sin" />
      
     
      <NumberButton buttonValue={7} />
      <NumberButton buttonValue={8} />
      <NumberButton buttonValue={9} />
     
      <FunctionButton buttonValue="-" />
      <SquareButton buttonValue="x²" />
      <CosButton buttonValue="cos" />

      <NumberButton buttonValue={4} />
      <NumberButton buttonValue={5} />
      <NumberButton buttonValue={6} />

      <FunctionButton buttonValue="*" />
      <PiButton buttonValue="3.141592" />
      <TanButton buttonValue="tan" />

      <NumberButton buttonValue={1} />
      <NumberButton buttonValue={2} />
      <NumberButton buttonValue={3} />
      <FunctionButton buttonValue="+" />
      <ExpoButton buttonValue="x^" />
      <CotButton buttonValue="cot" />
     
      <div className="zero-button">
        <NumberButton buttonValue={0} />
      </div>
      <NumberButton buttonValue="." />
      <FunctionButton buttonValue="%" />
      <LogButton buttonValue="ln" />
      <EqualButton />
      
    </div>
  </CalculatorStyles>
);

export default Calculator;
