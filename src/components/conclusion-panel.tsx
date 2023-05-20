import React from "react";
import PanelHeaderText from "./panel-header-text";
import { MathJax, MathJaxContext } from "better-react-mathjax";

type ConclusionPanelPropsType = {
  isActive: boolean;
};
export default function ConclusionPanel(props: ConclusionPanelPropsType) {
  const { isActive } = props;
  const config = {
    loader: { load: ["input/asciimath"] },
  };
  return (
    <div
      className={`h-full w-full bg-color2 flex flex-col overflow-hidden ${
        isActive ? "block" : "hidden"
      }`}
    >
      <div className="h-20 flex items-center p-6">
        <PanelHeaderText label="Conclusion" />
      </div>
      <div className="flex h-full">
        <div className="w-10/12 px-6">
          <div className="border-t h-[85vh] w-full p-20 font-noto text-justify flex flex-col gap-y-7  overflow-auto">
            <p>
              In summary, Simpson's 1/3 rule plugs in values in the following
              formula:
            </p>
            <div className="flex justify-center">
              <MathJaxContext config={config}>
                {
                  <MathJax>
                    {
                      "`int_{a}^{b} f(x)dxapprox\\frac{h}{3}[y_{0}+y_{n}+4sum_1^\\frac{n}{2}y_{2i-1}+2sum_1^left(\\frac{n}{2}-1\\right) y_{2i}]`"
                    }
                  </MathJax>
                }
              </MathJaxContext>
            </div>
            <p>
              We have to find the delta <i>(h)</i> value by inputting the a and
              b values, where <i>n</i> should be an even number.
            </p>
            <div className="flex justify-center">
              <MathJaxContext config={config}>
                {
                  <MathJax>
                    <p>{"`\\trianglex=\\frac{b-a}{n}`"}</p>
                  </MathJax>
                }
              </MathJaxContext>
            </div>
            <p>
              Additionally, since Simpson's rule only gives an approximate
              value, it is important to find the error bound. It can be done by
              using the following formula:
            </p>
            <div className="flex justify-center">
              <MathJaxContext config={config}>
                {<MathJax>{"`frac{M(b - a)^5}{180n^4}`"}</MathJax>}
              </MathJaxContext>
            </div>
            <p>
              As far as approximation methods go, using the Simpson's rule
              provides more accurate results than Trapezoidal's rule. It may be
              similar and more simpler, but Simpson's rule can help in more
              complex functions - which can save time.
            </p>
            <p>
              Due to that fact, creating a computational program for Simpson's
              1/3 rule would prove useful. With an extensive process in mind,
              the program would be able to calculate a function that requires a
              result that would not only accept the inputs given to it, but also
              derive the function - which proves to be a challenge. Due to the
              various ways different kinds of functions can be derived, the
              program will derive simpler functions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
