import React, { FC } from 'react';
import { Circle } from '../../molecules/Layout/Circle';
import { Section } from '../../molecules/Layout/Section';
import { ThemeColors } from '../../../utils';
/**
 *
 * @returns
 */
export const TogetherCircles = () => {
  return (
    <>
      {/* Light */}
      <Circle
        animate={true}
        width="50vw"
        height="50vw"
        top="0"
        right="0"
        smTop="-20vh"
        smRight="-50vw"
        mdTop="0vw"
        mdRight="0vw"
        lgTop="-5vw"
        xlTop="-15vw"
        xlRight="10vw"
        xl2Top="-25vh"
        color={ThemeColors.ternary}
        id="intro-circle-1"
      />
      {/* Dark */}
      <Circle
        animate={true}
        width="50vw"
        height="50vw"
        top="0"
        left="0"
        smTop="-25vw"
        smLeft="-50vw"
        mdTop="0vw"
        mdLeft="0vw"
        lgTop="-5vw"
        xlLeft="10vw"
        xlTop="-15vw"
        xl2Top="-25vw"
        color={ThemeColors.circleLightBrown}
        id="intro-circle-2"
      />
      {/*  */}
      <Circle
        animate={true}
        width="50vw"
        height="50vw"
        top="0"
        right="0"
        mdTop="0vw"
        smRight="-50vw"
        mdRight="25vw"
        lgTop="-5vw"
        xlTop="-15vw"
        xl2Top="-25vw"
        color={ThemeColors.circleBrown}
        id="intro-circle-3"
      />
    </>
  );
};

export interface IGetInTouchProps {
  bg?: string;
}

export const GetInTouch: FC<IGetInTouchProps> = ({
  children,
  bg = 'bg-transparent',
}) => {
  return (
    <Section
      backgroundColor={bg}
      mW=""
      mt="mt-0"
      mdMt="md:mt-0"
      mb="mb-0"
      mdMb="md:mb-0"
    >
      <div className="container relative overflow-hidden max-w-screen-2xl mx-auto bg-gradient-qualogy rounded px-10 py-4 md:py-8 lg:py-12 xl:py-16 2xl:py-20  flex flex-col justify-center items-center">
        {TogetherCircles()}
        {children}
      </div>
    </Section>
  );
};
