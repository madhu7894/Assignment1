import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  const handleSetDisplayValue = num => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`)
    }
  };

  const handleSetCosValue=()=>{
    setNumber(`${Math.round(`${ ( Math.cos(parseFloat(number))) * 1000}`) / 1000}`)
    setStoredNumber(`${Math.round(`${ ( Math.cos(parseFloat(number))) * 1000}`) / 1000}`)
    setNumber('')
  }

  const handleSetSinValue=()=>{
    setNumber(`${Math.round(`${ ( Math.sin(parseFloat(number))) * 1000}`) / 1000}`)
    setStoredNumber(`${Math.round(`${ ( Math.sin(parseFloat(number))) * 1000}`) / 1000}`)
    setNumber('')
  }

  const handleSetExpoValue=()=>{
    setNumber(`${Math.round(`${ ( Math.exp(parseFloat(number))) * 1000}`) / 1000}`)
    setStoredNumber(`${Math.round(`${ ( Math.exp(parseFloat(number))) * 1000}`) / 1000}`)
    setNumber('')
  }

  const handleSetTanValue=()=>{
    setNumber(`${Math.round(`${ ( Math.tan(parseFloat(number))) * 1000}`) / 1000}`)
    setStoredNumber(`${Math.round(`${ ( Math.tan(parseFloat(number))) * 1000}`) / 1000}`)
    setNumber('')
  }

  const handleSetCotValue=()=>{
    setNumber(`${Math.round(`${ (1/ (Math.tan(parseFloat(number))))* 1000}`) / 1000}`)
    setStoredNumber(`${Math.round(`${ (1/( Math.tan(parseFloat(number)))) * 1000}`) / 1000}`)
    setNumber('')
  }

  const handleSetRootValue=()=>{
    setNumber(`${Math.round(`${ ( Math.sqrt(parseFloat(number))) * 1000}`) / 1000}`)
    setStoredNumber(`${Math.round(`${ ( Math.sqrt(parseFloat(number))) * 1000}`) / 1000}`)
    setNumber('')
  }

  const handleSetLogValue=()=>{
    setNumber(`${Math.round(`${ ( Math.log(parseFloat(number))) * 1000}`) / 1000}`)
    setStoredNumber(`${Math.round(`${ ( Math.log(parseFloat(number))) * 1000}`) / 1000}`)
    setNumber('')
  }

  const handleSetSquareValue=()=>{
    setNumber(`${Math.round(`${ ( Math.pow(parseFloat(number),2)) * 1000}`) / 1000}`)
    setStoredNumber(`${Math.round(`${ ( Math.pow(parseFloat(number),2)) * 1000}`) / 1000}`)
    setNumber('')
  }





  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };

  const handleSetCalcFunction = type => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };

  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`);
          break;
          case '%':
            setStoredNumber(`${Math.round(`${parseFloat(storedNumber) % parseFloat(number) * 1000}`) / 1000}`);
            break;
        case '√':
          setStoredNumber(`${Math.round(`${ (Math.sqrt(parseFloat(number))) * 1000}`) / 1000}`);
          break;  
        
        default:
          break;
      }
      setNumber('');
    }
  };

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetCosValue,
        handleSetSinValue,
        handleSetExpoValue,
        handleSetTanValue,
        handleSetCotValue,
        handleSetRootValue,
        handleSetLogValue,
        handleSetSquareValue,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
