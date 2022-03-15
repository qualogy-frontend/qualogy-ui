import React from 'react';
import { Circle } from '../../atoms';
import { ThemeColors } from '../../../utils';

export const TopCircle = () => (
  <>
    <Circle
      animate={true}
      width="100vw"
      height="100vw"
      top="5vh"
      left="-30vw"
      smTop="-20vh"
      smLeft="-50vw"
      mdTop="-5vh"
      mdLeft="-50vw"
      xlTop="-30vh"
      xlLeft="-50vw"
      xl2Top="-100vh"
      color={ThemeColors.ternary}
      id="intro-circle-1"
    />
    <Circle
      animate={true}
      width="100vw"
      height="100vw"
      top="2vh"
      left="-40vw"
      smTop="-6vh"
      smLeft="-50vw"
      mdTop="-6vh"
      mdLeft="-60vw"
      xlTop="-30vh"
      xl2Top="-80vh"
      color={ThemeColors.circleLightBrown}
      id="intro-circle-2"
    />
    <Circle
      animate={true}
      width="100vw"
      height="100vw"
      top="10vh"
      left="-15vw"
      smTop="-30vh"
      smLeft="-50vw"
      mdTop="10vh"
      mdLeft="-40vw"
      xlTop="-20vh"
      xl2Top="-80vh"
      color={ThemeColors.circleBrown}
      id="intro-circle-3"
    />
  </>
);
