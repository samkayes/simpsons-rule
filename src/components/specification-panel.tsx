import PanelHeaderText from "./panel-header-text";
import SpecificationItem from "./specification-item";
type SpecificationPanelPropsType = {
  isActive: boolean;
};
export default function SpecificationPanel(props: SpecificationPanelPropsType) {
  const { isActive } = props;
  return (
    <div
      className={`h-full w-full bg-color2 flex flex-col overflow-hidden ${
        isActive ? "block" : "hidden"
      }`}
    >
      <div className="h-20 flex items-center p-6">
        <PanelHeaderText label="Specification" />
      </div>
      <div className="flex h-full">
        <div className="w-10/12 px-6">
          <div className="border-t h-[85vh] w-full p-20 font-noto text-justify flex flex-col items-center gap-y-7  overflow-auto">
            <div className="bg-green-100 p-10 w-3/4">
              <p className="font-semibold mb-5 font-montserrat">Features :</p>
              <div className="w-full">
                <SpecificationItem
                  label="When the Program button is clicked, Simpson's calculator will appear."
                  section="feature"
                />
                <SpecificationItem
                  label="Equations are rendered using MathJax for better readability."
                  section="feature"
                />
                <SpecificationItem
                  label="Program can accurately solve Simpson's 1/3 rule."
                  section="feature"
                />
                <SpecificationItem
                  label="Calculate button will show when all inputs in the calculator already have accepted values."
                  section="feature"
                />
                <SpecificationItem
                  label="Calculator can show the solution to solving Simpson's rule."
                  section="feature"
                />
                <SpecificationItem
                  label="Calculator inputs will only accept numbers."
                  section="feature"
                />
              </div>
            </div>
            <div className="bg-red-100 p-10 w-3/4">
              <p className="font-semibold mb-5 font-montserrat">
                Limitations :
              </p>
              <div className="w-full">
                <SpecificationItem
                  label="Upper and Lower bound inputs will only accept values less than or equal to 10."
                  section="limit"
                />
                <SpecificationItem
                  label="Upper and Lower bound inputs will only accept values greater than or equal to -10."
                  section="limit"
                />
                <SpecificationItem
                  label="Constant input will only accept values less than 100."
                  section="limit"
                />
                <SpecificationItem
                  label="Constant input will only accept values greater than -100."
                  section="limit"
                />
                <SpecificationItem
                  label="Exponent input will only accept values less than 10."
                  section="limit"
                />
                <SpecificationItem
                  label="Exponent input will only accept values greater than or equal to 0."
                  section="limit"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="  w-2/12 h-[85vh]"></div>
      </div>
    </div>
  );
}
