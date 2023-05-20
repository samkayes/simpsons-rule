import tw from 'twin.macro';
import styled from '@emotion/styled'

type ActiveComponent = {
    isActive?: boolean;
}

export const App = styled.div(() => [
    tw`h-screen w-full bg-color2 flex p-4 gap-x-4`,
]);

export const LeftContainer = styled.div(() => [
    tw`h-full w-1/6 bg-color2 flex flex-col gap-y-10 z-20 rounded-lg p-6 drop-shadow-sm border`,
]);

export const TitleText = styled.div(() => [
    tw`font-montserrat uppercase flex items-center select-none text-black font-semibold px-6 h-1/6 gap-x-2`,
]);

export const Container = styled.div<ActiveComponent>((props) => [
    tw`w-full rounded-lg flex flex-col h-2/5 h-max`,
    props.isActive ? tw`h-2/5 border`:tw`h-0`
]);

export const Button = styled.div<ActiveComponent>((props) => [
    tw`text-white p-2 text-sm font-bold w-full flex justify-center rounded-lg transition-all duration-200 ease-in-out mx-4`,
    props.isActive ? tw`bg-color6 cursor-pointer hover:bg-color7`:tw`bg-color5 cursor-not-allowed`
]);

export const HeaderText = styled.div<ActiveComponent>((props) => [
    tw`font-semibold h-14  items-center select-none p-4 border-b`,
    props.isActive ? tw`flex` : tw`hidden`
]);

export const FormulaContainer = styled.div(() => [
    tw`h-5/6 flex flex-col justify-center items-center p-4 `,
]);

export const RightContainer = styled.div(() => [
    tw`h-full w-full bg-color1 flex flex-col items-center gap-y-4 relative`,
]);

export const AnswerContainer = styled.div(() => [
    tw`w-3/4 bg-white p-10 drop-shadow-md`,
]);

export const SolutionContainer = styled.div(() => [
    tw`w-full rounded-lg bg-white transition duration-500 ease-in-out drop-shadow-sm flex flex-col h-full border`
]);

export const HiddenContainer = styled.div<ActiveComponent>((props) => [
    tw`h-full w-full`,
    props.isActive? tw`block`: tw`hidden`
]);

export const SectionContainer = styled.div(() => [
    tw`p-6 w-full flex flex-col gap-y-4 text-sm items-center`
]);

export const SidebarButton = styled.div<ActiveComponent>((props) => [
    tw`h-10 border border-white flex items-center text-sm font-semibold gap-x-3 cursor-pointer font-noto px-6 rounded-md transition-all duration-200`,
    props.isActive ? tw`bg-color8 text-color1`:tw`hover:border-gray-200 hover:bg-color1`
]);

export const SectionHeading = styled.div(()=>[
    tw`flex items-center px-10 bg-color1 gap-x-5`
]);

export const SectionSubHeading = styled.div(()=>[
    tw`font-semibold my-6`
]);
export const SectionSubText = styled.div(()=>[
    tw`my-2 px-12`
]);

export const SectionSubFormula = styled.div(()=>[
    tw` w-full flex justify-center my-4`
]);