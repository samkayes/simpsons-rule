import React, { useEffect, useState } from "react";

import * as S from "./components/styles";

import Sidebar from "./components/sidebar";
import MainContainer from "./components/main-container";

export default function App(): JSX.Element {
  const [isPanelToggle, setPanelToggle] = useState("1");
  const [isValue, setValue] = useState<number[]>([1, 1, 1, 1, 0.001]);

  const [isDerivativeConstantArray, setDerivativeConstantArray] = useState<
    number[]
  >([0, 0, 0, 0]);
  const [isDerivativeExponentArray, setDerivativeExponentArray] = useState<
    number[]
  >([0, 0, 0, 0]);

  const [isUpperbound, setUpperbound] = useState<number[]>([0, 0, 0, 0]);
  const [isLowerbound, setLowerbound] = useState<number[]>([0, 0, 0, 0]);
  const [isMax, setMax] = useState<number>(0);
  const [isNumber, setNumber] = useState<number[]>([0, 0, 0]);
  const [isDelta, setDelta] = useState<number>(0);
  const [isEndValues, setEndValues] = useState<number[]>([]);
  const [isOddValues, setOddValues] = useState<number[]>([]);
  const [isEvenValues, setEvenValues] = useState<number[]>([]);
  const [isTest, setTest] = useState<number[]>([0]);
  const [isInitial, setInitial] = useState<number[]>([0]);
  const [isAnswer, setAnswer] = useState<number>(0);
  const [isOddSum, setOddSum] = useState<number>(0);
  const [isEvenSum, setEvenSum] = useState<number>(0);
  const [isLeftSide, setLeftSide] = useState<number>(0);

  const handlePanelToggle = (value: string): void => {
    setPanelToggle(value);
  };
  const handleValues = (value: number[]): void => {
    setValue(value);
    solveSimpsons();
  };

  const handleComputation = (
    constant: number,
    x: number,
    exponent: number
  ): number => {
    let num = x;
    let retVal = constant;
    if (exponent > 0) {
      num = num ** exponent;
      retVal *= num;
    }

    return retVal;
  };

  const solveSimpsons = () => {
    let arrayConstant = [];
    let arrayExponent = [];
    let arrayUpper = [];
    let arrayLower = [];
    let lower = isValue[0];
    let upper = isValue[1];
    let constant = isValue[2];
    let exponent = isValue[3];

    for (let n = 1; n <= 4; n++) {
      constant *= exponent;
      exponent -= 1;
      arrayConstant.push(constant);
      arrayExponent.push(exponent);
      arrayUpper.push(handleComputation(constant, upper, exponent));
      arrayLower.push(handleComputation(constant, lower, exponent));
    }

    setDerivativeConstantArray(arrayConstant);
    setDerivativeExponentArray(arrayExponent);
    setUpperbound(arrayUpper);
    setLowerbound(arrayLower);
  };

  function findN() {
    let max = isMax;
    let lower = isValue[0];
    let upper = isValue[1];
    let error = isValue[4];
    let answer = 0;
    let n_rounded = 0;

    answer = Math.pow((max * Math.pow(upper - lower, 5)) / 180 / error, 1 / 4);
    n_rounded = Math.round(answer);
    setNumber([
      answer,
      n_rounded,
      n_rounded % 2 === 0 ? n_rounded : n_rounded + 1,
    ]);
  }

  function findDelta() {
    let lower = isValue[0];
    let upper = isValue[1];
    let n = isNumber[2];
    setDelta((upper - lower) / n);
  }

  function findInitialValues() {
    let num = isValue[0];
    let max = isNumber[2];
    let delta = isDelta;
    let init_array = [];
    let oddArr = [];
    let evenArr = [];

    for (let n = 0; n < max - 1; n++) {
      num += delta;
      init_array.push(num);
    }

    for (let n = 0; n < init_array.length; n++) {
      if (n % 2 === 0) {
        oddArr.push(init_array[n]);
      } else {
        evenArr.push(init_array[n]);
      }
    }
    setInitial(init_array);
    setTest(init_array);
  }

  function DivideArray() {
    let init_array = isInitial;
    let ends = [];
    let oddArr = [];
    let evenArr = [];
    let lower = isValue[0];
    let upper = isValue[1];

    for (let n = 0; n < init_array.length; n++) {
      if (n % 2 === 0) {
        oddArr.push(init_array[n]);
      } else {
        evenArr.push(init_array[n]);
      }
    }
    ends.push(lower);
    ends.push(upper);

    setOddValues(oddArr);
    setEvenValues(evenArr);
    setEndValues(ends);
  }

  function findOddArray() {
    let delta = isDelta;
    let odd_array = [];
    let even_array = [];
    let lower = isValue[0];
    let upper = isValue[1];
    let constant = isValue[2];
    let exponent = isValue[3];
    let left_side = 0;
    let n;

    for (n = 0; n < isOddValues.length; n++) {
      odd_array.push(4 * constant * Math.pow(isOddValues[n], exponent));
    }

    for (n = 0; n < isEvenValues.length; n++) {
      even_array.push(2 * (constant * Math.pow(isEvenValues[n], exponent)));
    }

    left_side = (delta * (upper - lower)) / 3;
    setOddValues(odd_array);
    setEvenValues(even_array);
    setLeftSide(left_side);
  }

  function findSums() {
    let n;
    let total_odd = 0;
    let total_even = 0;
    let set_odd = isOddValues;
    let set_even = isEvenValues;

    for (n = 0; n < set_odd.length; n++) {
      total_odd += set_odd[n];
    }

    for (n = 0; n < set_even.length; n++) {
      total_even += set_even[n];
      console.log(set_odd[n]);
    }

    setOddSum(total_odd);
    setEvenSum(total_even);
  }

  function findAnswer() {
    let left = isLeftSide;
    let odd_sum = isOddSum;
    let even_sum = isEvenSum;
    let x0 = isEndValues[0];
    let xn = isEndValues[1];
    let total = 0;
    let constant = isValue[2];
    let exponent = isValue[3];

    x0 = constant * Math.pow(x0, exponent);
    xn = constant * Math.pow(xn, exponent);

    total = left * (x0 + xn + odd_sum + even_sum);

    setAnswer(total);
  }

  useEffect(() => {
    solveSimpsons();
    setMax(Math.max(...isUpperbound, ...isLowerbound));
  }, [isValue]);

  useEffect(() => {
    setMax(Math.max(...isUpperbound, ...isLowerbound));
  }, [isLowerbound, isValue]);

  useEffect(() => {
    findN();
  }, [isMax, isValue, isValue]);

  useEffect(() => {
    findDelta();
  }, [isNumber, isValue]);

  useEffect(() => {
    findInitialValues();
  }, [isDelta, isValue]);

  useEffect(() => {
    DivideArray();
  }, [isInitial]);

  useEffect(() => {
    findOddArray();
  }, [isEndValues]);

  useEffect(() => {
    findSums();
  }, [isEvenValues, isOddValues]);

  useEffect(() => {
    findAnswer();
  }, [isEvenSum, isOddSum, isLeftSide]);

  return (
    <S.App>
      <Sidebar
        handlePanelToggle={handlePanelToggle}
        isActive={isPanelToggle}
        handleValues={handleValues}
      />
      <MainContainer
        isActive={isPanelToggle}
        values={isValue}
        der_const={isDerivativeConstantArray}
        der_expo={isDerivativeExponentArray}
        lower_array={isLowerbound}
        upper_array={isUpperbound}
        max={isMax}
        n={isNumber}
        delta={isDelta}
        odd_values={isOddValues}
        even_values={isEvenValues}
        end_values={isEndValues}
        answer={isAnswer}
        test_arr={isTest}
        left_side={isLeftSide}
        odd_sum={isOddSum}
        even_sum={isEvenSum}
      />
    </S.App>
  );
}
