import integral from "../images/integral.png";

type FormulaContainerPropsType = {
  onConstantChange: (event: any) => void;
  onExponentChange: (event: any) => void;
  hasConstantValue: boolean;
  hasExponentValue: boolean;
  isActive: boolean;
};

export default function FormulaContainer(
  props: FormulaContainerPropsType
): JSX.Element {
  const {
    onConstantChange,
    onExponentChange,
    hasConstantValue,
    hasExponentValue,
    isActive,
  } = props;

  return (
    <div
      className={` w-full items-center font-noto italic text-xl gap-x-2 ${
        isActive ? "h-2/5 flex" : " h-0 hidden"
      }`}
    >
      <img
        src={integral}
        alt="integral-icon"
        className="h-4/5 w-2/12  select-none"
      ></img>
      <div className="flex gap-x-2 w-8/12 h-full items-center flew-row-reverse relative">
        <input
          type="text"
          className={`w-1/2 h-1/2  p-2 text-center rounded-lg border focus:outline-0 placeholder:font-noto text-base 
        placeholder:font-thin placeholder:italic placeholder:tracking-wide ${
          !hasConstantValue && "border-color9"
        }`}
          placeholder="c"
          onChange={onConstantChange}
        />
        <p className="w-1/2">x</p>
        <input
          type="text"
          className={`absolute top-0 right-0 w-3/12 h-3/6  p-1 text-center rounded-lg border focus:outline-0 placeholder:font-noto text-base 
        placeholder:font-thin placeholder:italic placeholder:tracking-wide ${
          !hasExponentValue && "border-color9"
        }`}
          placeholder="e"
          onChange={onExponentChange}
        />
      </div>
      <p className="w-2/12 select-none">dx</p>
    </div>
  );
}
