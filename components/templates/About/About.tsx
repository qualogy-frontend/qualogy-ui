import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { BiRightArrowCircle } from 'react-icons/bi';
import { H3Tag, Paragraph, Button } from '../../atoms';
import { CardLargeImage } from '../../molecules';
import { ThemeColors } from '../../../utils';
import { IAboutInterface } from './About.interface';

export const About: React.FC<IAboutInterface> = ({ data, imageBase = '' }) => {
  const { title, sub, content, employee, button } = data;
  return (
    <section
      className={`w-full max-w-screen-2xl mx-auto px-5 md:px-10 mt-20 md:mt-24 md:mb-20 flex flex-col ${
        employee.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
      }`}
    >
      <div className="w-full lg:w-6/12">
        <CardLargeImage
          image={`${imageBase}${employee.image.url}`}
          alt={employee.image.alternativeText}
          text={employee.content}
          button={employee.button}
          reversed={employee.reversed}
        />
      </div>
      <div
        className={`${
          employee.reversed ? `lg:mr-24 xl:mr-36` : `lg:ml-24 xl:ml-36`
        }  w-full lg:w-6/12 `}
      >
        <Paragraph fontWeight="600" color={ThemeColors.ternary} fontSize="16px">
          {sub}
        </Paragraph>
        <H3Tag color={ThemeColors.secondaryFont}>{title}</H3Tag>
        <ContentWrapper>
          <ReactMarkdown children={content} />
        </ContentWrapper>
        {button && (
          <Button
            type="blank"
            width="initial"
            link={button.link}
            color={ThemeColors.linkFont}
          >
            <BiRightArrowCircle
              size="24px"
              style={{ color: ThemeColors.linkFont, marginRight: '8px' }}
            />
            <Paragraph fontSize="18px" fontWeight="400">
              {button.label}
            </Paragraph>
          </Button>
        )}
      </div>
    </section>
  );
};

const ContentWrapper = styled.div`
  p {
    font-family: PT Sans;
    font-style: normal;
    font-weight: normal;
    margin: 16px 0;
    color: #848278;
  }
  ul {
    font-family: PT Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #231f20;
    list-style: inside;
  }
`;
