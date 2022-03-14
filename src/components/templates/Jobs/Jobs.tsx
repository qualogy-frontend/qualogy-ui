import React from 'react';
import { Title, Paragraph, Image, Button } from '../../atoms';
import { Section, Grid, GridChild, Circle } from '../../molecules';
import { IJobsInterface } from './Jobs.interface';
import { ThemeColors } from '../../../utils';

export const Jobs: React.FC<IJobsInterface> = ({ data, showCircles }) => {
  console.log('Jobs');
  //
  const { sub, content, button } = data;
  //
  return (
    <Section id="jobs">
      <Grid
        zIndex="11"
        columns="100%"
        rows="auto auto"
        mobile
        mobileColumns="repeat(12, 1fr)"
        mobileGap="38px"
      >
        {showCircles && (
          <GridChild direction="column" mobile mobileColumn="2/11">
            <Grid
              columns="repeat(3, 1fr) 2fr repeat(3,1fr)"
              mobileColumns="repeat(3,1fr) 0fr"
              mobileRows="1fr 1fr"
              mobileRowGap="80px"
              mobile
            >
              <Image
                top={-10}
                alternate={10}
                type="square"
                padding="0"
                width="50px"
                height="50px"
                animSpeed=""
                src="/assets/people/employee.png"
                alt="/assets/people/employee.png"
                bounce={true}
              />
              <Image
                top={-90}
                alternate={-80}
                type="square"
                padding="0"
                width="100px"
                height="100px"
                animSpeed=""
                src="/assets/people/employee_2.png"
                alt="/assets/people/employee_2.png"
                bounce={true}
              />
              <Image
                top={-20}
                alternate={-10}
                type="square"
                padding="0"
                width="80px"
                height="80px"
                animSpeed=""
                src="/assets/people/employee.png"
                alt="/assets/people/employee.png"
                bounce={true}
              />
              <span />
              <Image
                top={-10}
                alternate={10}
                type="square"
                padding="0"
                width="50px"
                height="50px"
                animSpeed=""
                src="/assets/people/employee.png"
                alt="/assets/people/employee.png"
                bounce={true}
              />
              <Image
                top={-90}
                alternate={-80}
                type="square"
                padding="0"
                width="100px"
                height="100px"
                animSpeed=""
                src="/assets/people/employee_2.png"
                alt="/assets/people/employee_2.png"
                bounce={true}
              />
              <Image
                top={-20}
                alternate={-10}
                type="square"
                padding="0"
                width="80px"
                height="80px"
                animSpeed=""
                src="/assets/people/employee.png"
                alt="/assets/people/employee.png"
                bounce={true}
              />
            </Grid>
          </GridChild>
        )}

        <GridChild direction="column" margin="0 " mobile mobileColumn="2/11">
          {sub && <Paragraph color={ThemeColors.primary}>{sub}</Paragraph>}
          {content && (
            <Title
              color={ThemeColors.secondaryFont}
              fontSize="40px"
              align="center"
              margin="16px 0 76px 0"
            >
              {content}
            </Title>
          )}
          {button && button.children && (
            <Button type="gradient">{button.children}</Button>
          )}
        </GridChild>
      </Grid>
      <Circle
        top="-20vh"
        smTop="-10vh"
        mdTop="-5vh"
        lgTop="-25vh"
        xlTop="-50vh"
        left="0vw"
        smLeft="10vw"
        xlLeft="0"
        width="100vw"
        height="100vw"
        smWidth="80vw"
        smHeight="80vw"
        color={ThemeColors.inactive}
      />
      <Circle
        top="-5vh"
        smTop="0vw"
        mdTop="5vh"
        lgTop="-15vh"
        xlTop="-30vh"
        left="0vw"
        smLeft="20vw"
        lgLeft="15vw"
        xlLeft="-10vw"
        width="100vw"
        height="100vw"
        smWidth="80vw"
        smHeight="80vw"
        color={ThemeColors.inactive}
      />
      <Circle
        top="15vh"
        smTop="0vw"
        mdTop="5vh"
        lgTop="-15vh"
        xlTop="-30vh"
        left="0"
        lgLeft="5vw"
        xlLeft="10vw"
        width="100vw"
        height="100vw"
        smWidth="80vw"
        smHeight="80vw"
        color={ThemeColors.inactive}
        animate={false}
      />
    </Section>
  );
};
