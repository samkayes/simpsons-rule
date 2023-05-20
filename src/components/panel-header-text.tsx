import React from "react";

type PanelHeaderTextPropsType = {
  label: string;
};

export default function PanelHeaderText(props: PanelHeaderTextPropsType) {
  const { label } = props;
  return (
    <div className="px-10 flex items-center text-xl font-bold font-montserrat  select-none">
      {label}
    </div>
  );
}
