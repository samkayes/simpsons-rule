import React, { useState } from "react";
import FormulaContainer from "./formula-container";
import Bound from "./bound";

import * as S from "./styles";
import SidebarButton from "./sidebar-button";

import { BiCalculator } from "react-icons/bi";

type SidebarPropsType = {
  handlePanelToggle: (value: string) => void;
  isActive: string;
  handleValues: (value: number[]) => void;
};

export default function Sidebar(props: SidebarPropsType) {
  const { handlePanelToggle, isActive, handleValues } = props;
  const [isConstant, setConstant] = useState(false);
  const [isExponent, setExponent] = useState(false);
  const [isLowerBound, setLowerBound] = useState(false);
  const [isUpperBound, setUpperBound] = useState(false);
  const [isError, setError] = useState(false);

  const [isConstantFinal, setConstantFinal] = useState<number>(1);
  const [isExponentFinal, setExponentFinal] = useState<number>(1);
  const [isLowerBoundFinal, setLowerBoundFinal] = useState<number>(1);
  const [isUpperBoundFinal, setUpperBoundFinal] = useState<number>(2);
  const [isErrorFinal, setErrorFinal] = useState<number>(0.0001);

  function handleUpperBoundChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    if (
      event.target.value === "" ||
      isNaN(Number(event.target.value)) ||
      Number(event.target.value) > 10 ||
      Number(event.target.value) < -10
    ) {
      setUpperBound(false);
    } else {
      setUpperBound(true);
      setUpperBoundFinal(Number(event.target.value));
    }
  }

  function handleLowerBoundChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    if (
      event.target.value === "" ||
      isNaN(Number(event.target.value)) ||
      Number(event.target.value) > 10 ||
      Number(event.target.value) < -10
    ) {
      setLowerBound(false);
    } else {
      setLowerBound(true);
      setLowerBoundFinal(Number(event.target.value));
    }
  }

  function handleConstantChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    if (
      event.target.value === "" ||
      isNaN(Number(event.target.value)) ||
      Number(event.target.value) > 99 ||
      Number(event.target.value) < -99
    ) {
      setConstant(false);
    } else {
      setConstant(true);
      setConstantFinal(Number(event.target.value));
    }
  }

  function handleExponentChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    event.preventDefault();
    if (
      event.target.value === "" ||
      isNaN(Number(event.target.value)) ||
      Number(event.target.value) > 9 ||
      Number(event.target.value) < 0
    ) {
      setExponent(false);
    } else {
      setExponent(true);
      setExponentFinal(Number(event.target.value));
    }
  }

  function handleErrorChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    if (
      event.target.value === "" ||
      isNaN(Number(event.target.value)) ||
      Number(event.target.value) >= 1 ||
      Number(event.target.value) <= 0
    ) {
      setError(false);
    } else {
      setError(true);
      setErrorFinal(Number(event.target.value));
    }
  }

  function allAreTrue() {
    const value = [isConstant, isExponent, isError, isUpperBound, isLowerBound];
    return value.every((element) => element === true);
  }

  function handleSetValues() {
    allAreTrue() &&
      handleValues([
        isLowerBoundFinal,
        isUpperBoundFinal,
        isConstantFinal,
        isExponentFinal,
        isErrorFinal,
      ]);
  }

  return (
    <S.LeftContainer>
      <S.TitleText>
        <BiCalculator className="text-lg" />
        <p>Simpson's Rule</p>
      </S.TitleText>
      <div className="flex flex-col gap-y-2">
        <SidebarButton
          label="Introduction"
          isActive={isActive === "1"}
          icon="BiBookAlt"
          onClick={() => handlePanelToggle("1")}
          key="1"
        />
        <SidebarButton
          label="Program"
          isActive={isActive === "2"}
          icon="RiComputerLine"
          onClick={() => handlePanelToggle("2")}
          key="2"
        />
        <SidebarButton
          label="Specification"
          isActive={isActive === "3"}
          icon="HiOutlineMagnifyingGlass"
          onClick={() => handlePanelToggle("3")}
          key="3"
        />
        <SidebarButton
          label="Conclusion"
          isActive={isActive === "4"}
          icon="MdOutlineSummarize"
          onClick={() => handlePanelToggle("4")}
          key="4"
        />
      </div>
      <hr />
      <S.Container isActive={isActive === "2"}>
        <S.HeaderText isActive={isActive === "2"}>Input Data</S.HeaderText>
        <S.FormulaContainer>
          <Bound
            label="b"
            onChange={handleUpperBoundChange}
            hasValue={isUpperBound}
            isActive={isActive === "2"}
          />
          <FormulaContainer
            onConstantChange={handleConstantChange}
            onExponentChange={handleExponentChange}
            hasConstantValue={isConstant}
            hasExponentValue={isExponent}
            isActive={isActive === "2"}
          />
          <Bound
            label="a"
            onChange={handleLowerBoundChange}
            hasValue={isLowerBound}
            isActive={isActive === "2"}
          />
          <div
            className={`w-full h-10 mt-2 items-center gap-x-2  justify-center ${
              isActive === "2" ? "flex" : "hidden"
            }`}
          >
            <p className="font-semibold select-none font-noto">error = </p>
            <input
              className={`w-5/12 h-full text-center border font-noto rounded-md focus:outline-0 placeholder:font-noto ${
                !isError && "border-color9"
              }`}
              placeholder="0.001"
              onChange={handleErrorChange}
            />
          </div>
        </S.FormulaContainer>
        <div
          className={`h-1/6 justify-center items-center select-none py-4 ${
            isActive === "2" ? "flex" : "hidden"
          }`}
        >
          <S.Button isActive={allAreTrue()} onClick={handleSetValues}>
            Calculate
          </S.Button>
        </div>
      </S.Container>
    </S.LeftContainer>
  );
}
