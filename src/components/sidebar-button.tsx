import React from "react";
import * as S from "./styles";
import { BiBookAlt } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineSummarize } from "react-icons/md";

type SidebarButtonPropsType = {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: (value: string) => void;
  key: string;
};

export default function SidebarButton(props: SidebarButtonPropsType) {
  const { label, isActive, icon, onClick, key } = props;

  function renderSwitch() {
    switch (icon) {
      case "BiBookAlt":
        return <BiBookAlt />;
      case "RiComputerLine":
        return <RiComputerLine />;
      case "HiOutlineMagnifyingGlass":
        return <HiOutlineMagnifyingGlass />;
      case "MdOutlineSummarize":
        return <MdOutlineSummarize />;
      default:
        return "";
    }
  }
  function handleOnClickSideButton(value: string): void {
    onClick(value);
    console.log(key);
  }

  return (
    <S.SidebarButton
      isActive={isActive}
      onClick={() => handleOnClickSideButton(key)}
    >
      {renderSwitch()}
      <p className="mt-0.5 leading-none select-none">{label}</p>
    </S.SidebarButton>
  );
}
