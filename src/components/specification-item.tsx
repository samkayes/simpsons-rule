import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";

type SpecificationItemPropsType = {
  label: string;
  section: string;
};

export default function SpecificationItem(props: SpecificationItemPropsType) {
  const { label, section } = props;
  return (
    <div className="my-4 px-8 flex items-center gap-x-5">
      {section === "feature" ? (
        <BsFillCheckCircleFill className="text-color7" />
      ) : (
        <RiCloseCircleFill className="text-color8" />
      )}
      <p className="text-sm">{label}</p>
    </div>
  );
}
