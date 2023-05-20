import React from "react";
import PanelHeaderText from "./panel-header-text";
import * as S from "./styles";
import { MathJax, MathJaxContext } from "better-react-mathjax";
type ProgramPanelPropsType = {
  isActive: boolean;
  values: number[] | undefined;
  der_const: number[] | undefined;
  der_expo: number[] | undefined;
  lower_array: number[] | undefined;
  upper_array: number[] | undefined;
  max: number;
  n: number[];
  delta: number;
  odd_values: number[];
  even_values: number[];
  end_values: number[];
  answer: number;
  test_arr: number[];
  odd_sum: number;
  even_sum: number;
  left_side: number;
};
export default function ProgramPanel(props: ProgramPanelPropsType) {
  const {
    isActive,
    values = [],
    der_const = [],
    der_expo = [],
    lower_array = [],
    upper_array = [],
    max,
    n,
    delta,
    end_values,
    answer,
    odd_sum,
    even_sum,
    left_side,
  } = props;

  const lower = values[0];
  const upper = values[1];

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
        <PanelHeaderText label="Program" />
      </div>
      <div className="flex h-full">
        <div className="w-10/12 px-6">
          <div className="border-t h-[85vh] w-full px-20 pt-20  font-noto text-justify flex flex-col">
            <S.SectionHeading className=" h-[10vh]">
              <p className="font-semibold ">Answer :</p>
              <p className="">{answer}</p>
            </S.SectionHeading>
            <S.SectionHeading className=" h-[10vh] mt-7">
              <p className="font-semibold">Solution :</p>
            </S.SectionHeading>
            <div className="h-[100vh] overflow-auto px-20 py-5 text-sm">
              <S.SectionSubHeading>Step 1: Find n</S.SectionSubHeading>
              <S.SectionSubText>
                Using Error bound for Simpson's rule to determine number of
                sub-intervals,
              </S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax>
                      {"`Err \\leq\\frac{M(b-a)^{5}}{180n^{4}}`"}
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>Find the fourth derivative,</S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="flex flex-col font-semibold">
                      <p>
                        {"`f^{1}(x)= `"}
                        <span className="mx-2">
                          {der_const[0]}
                          {der_expo[0] > 1 && "x^" + der_expo[0]}
                          {der_expo[0] === 1 && "x"}
                          {der_expo[0] === 0 && ""}
                        </span>
                      </p>
                      <p>
                        {"`f^{2}(x)= `"}
                        <span className="mx-2">
                          {der_const[1]}
                          {der_expo[1] > 1 && "x^" + der_expo[1]}
                          {der_expo[1] === 1 && "x"}
                          {der_expo[1] === 0 && ""}
                        </span>
                      </p>
                      <p>
                        {"`f^{3}(x)= `"}
                        <span className="mx-2">
                          {der_const[2]}
                          {der_expo[2] > 1 && "x^" + der_expo[2]}
                          {der_expo[2] === 1 && "x"}
                          {der_expo[2] === 0 && ""}
                        </span>
                      </p>
                      <p>
                        {"`f^{4}(x)=`"}
                        <span className="mx-2">
                          {der_const[3]}
                          {der_expo[3] > 1 && "x^" + der_expo[3]}
                          {der_expo[3] === 1 && "x"}
                          {der_expo[3] === 0 && ""}
                        </span>
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>
                Find M by substituting x with the upper and lower bound,
              </S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="flex flex-col font-semibold">
                      <div className="mb-4 ">Upper bound : x = {upper} </div>
                      <p>
                        {"`f^{1}(x)= `"}
                        <span className="mx-2">
                          {der_const[0]}
                          {der_expo[0] > 1 &&
                            "x^" + der_expo[0] + " = " + upper_array[0]}
                          {der_expo[0] === 1 && "x = " + upper_array[0]}
                          {der_expo[0] === 0 && " = " + upper_array[0]}
                        </span>
                      </p>
                      <p>
                        {"`f^{2}(x)= `"}
                        <span className="mx-2">
                          {der_const[1]}
                          {der_expo[1] > 1 &&
                            "x^" + der_expo[1] + " = " + upper_array[1]}
                          {der_expo[1] === 1 && "x = " + upper_array[1]}
                          {der_expo[1] === 0 && " = " + upper_array[1]}
                        </span>
                      </p>
                      <p>
                        {"`f^{3}(x)= `"}
                        <span className="mx-2">
                          {der_const[2]}
                          {der_expo[2] > 1 &&
                            "x^" + der_expo[2] + " = " + upper_array[2]}
                          {der_expo[2] === 1 && "x = " + upper_array[2]}
                          {der_expo[2] === 0 && " = " + upper_array[2]}
                        </span>
                      </p>
                      <p>
                        {"`f^{4}(x)= `"}
                        <span className="mx-2">
                          {der_const[3]}
                          {der_expo[3] > 1 &&
                            "x^" + der_expo[3] + " = " + upper_array[3]}
                          {der_expo[3] === 1 && "x = " + upper_array[3]}
                          {der_expo[3] === 0 && " = " + upper_array[3]}
                        </span>
                      </p>

                      <div className="my-4  font-semibold">
                        Lower bound : x = {lower}
                      </div>
                      <p>
                        {"`f^{1}(x)= `"}
                        <span className="mx-2">
                          {der_const[0]}
                          {der_expo[0] > 1 &&
                            "x^" + der_expo[0] + " = " + lower_array[0]}
                          {der_expo[0] === 1 && "x = " + lower_array[0]}
                          {der_expo[0] === 0 && " = " + lower_array[0]}
                        </span>
                      </p>
                      <p>
                        {"`f^{2}(x)= `"}
                        <span className="mx-2">
                          {der_const[1]}
                          {der_expo[1] > 1 &&
                            "x^" + der_expo[1] + " = " + lower_array[1]}
                          {der_expo[1] === 1 && "x = " + lower_array[1]}
                          {der_expo[1] === 0 && " = " + lower_array[1]}
                        </span>
                      </p>
                      <p>
                        {"`f^{3}(x)= `"}
                        <span className="mx-2">
                          {der_const[2]}
                          {der_expo[2] > 1 &&
                            "x^" + der_expo[2] + " = " + lower_array[2]}
                          {der_expo[2] === 1 && "x = " + lower_array[2]}
                          {der_expo[2] === 0 && " = " + lower_array[2]}
                        </span>
                      </p>
                      <p>
                        {"`f^{4}(x)= `"}
                        <span className="mx-2">
                          {der_const[3]}
                          {der_expo[3] > 1 &&
                            "x^" + der_expo[3] + " = " + lower_array[3]}
                          {der_expo[3] === 1 && "x = " + lower_array[3]}
                          {der_expo[3] === 0 && " = " + lower_array[3]}
                        </span>
                      </p>
                      <div className="mt-4 ">Max = {max} </div>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>
                Use Error bound for Simpson's rule to find n,
              </S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="font-semibold">
                      <p>
                        {"`\\frac{M(b-a)^{5}}{180n^{4}} = `"}
                        <span className="mx-2">{n}</span>
                      </p>
                      <p>
                        {"`\\frac{M(b-a)^{5}}{180n^{4}}\\approx`"}
                        <span className="mx-2">{n[1]}</span>
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>
                {n[1] % 2 !== 0 && "Since n must be even in Simpson's rule,"}
              </S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="font-semibold">
                      {n[1] % 2 !== 0 && "Let n = " + n[2]}
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubHeading>Step 2: Solve for Sn:</S.SectionSubHeading>
              <S.SectionSubText>Find h or the delta x,</S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="font-semibold">
                      <p>
                        {"`\\trianglex=\\frac{b-a}{n}=`"}
                        <span className="mx-2">{delta}</span>
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>Use Simpson's rule Formula,</S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="font-semibold">
                      <p>
                        {
                          "`int_{a}^{b} f(x)dxapprox\\frac{h}{3}[y_{0}+y_{n}+4sum_1^\\frac{n}{2}y_{2i-1}+2sum_1^left(\\frac{n}{2}-1\\right) y_{2i}]`"
                        }
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="my-5 font-semibold">
                      <p>
                        {"`int_{a}^{b} f(x)dxapprox`"}
                        <span className="mx-2">
                          {left_side} [{end_values[0]} + {end_values[1]} +{" "}
                          {odd_sum} + {even_sum}]
                        </span>
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
              <S.SectionSubText>The answer is,</S.SectionSubText>
              <S.SectionSubFormula>
                <MathJaxContext config={config}>
                  {
                    <MathJax className="font-semibold">
                      <p>
                        {"`int_{a}^{b} f(x)dxapprox`"}
                        <span className="mx-2">{answer}</span>
                      </p>
                    </MathJax>
                  }
                </MathJaxContext>
              </S.SectionSubFormula>
            </div>
          </div>
        </div>
        <div className="  w-2/12 h-[90vh]"></div>
      </div>
    </div>
  );
}
