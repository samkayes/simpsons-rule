import React from "react";

type SectionLabelPropsType = {
  label: string;
};

export default function SectionLabel(props: SectionLabelPropsType) {
  const { label } = props;
  return (
    <div className="flex justify-start w-full">
      <p className="font-semibold">{label} :</p>
    </div>
  );
}
