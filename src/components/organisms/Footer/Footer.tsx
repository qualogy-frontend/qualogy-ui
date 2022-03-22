import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
  Content,
  Paragraph,
  Image,
  GridV1 as Grid,
  Section,
} from '../../atoms';
import { ContactLink, SocialLink } from './Footer.style';

export interface IFooterProps {
  backgroundCurved?: string;
  footerNavigation: any;
  imageUrls: {
    logoWithTitle: string;
    qualityControl1: string;
    qualityControl2: string;
  };
}

// direction="column"
// rowStart="2"
// mobile
// mobileRowStart="2"
// mobileColumn="6/12"
// column="3/5"
// justify="flex-start"
const fixedClass = 'flex flex-col justify-start';
const groupOneClass = `row-start-3 col-start-1 col-end-5 md:row-start-2 md:col-start-5 md:col-end-7 lg:col-start-3 lg:col-end-5 ${fixedClass}`;
const groupTwoClass = `row-start-3 col-start-5 col-end-9 md:row-start-2 md:col-start-7 md:col-end-9 lg:col-start-6 lg:col-end-8 ${fixedClass}`;
const groupThreeClass = `row-start-3 lg:row-start-2 col-start-9 col-end-13 md:row-start-2 md:col-start-9 md:col-end-11 lg:col-start-9 lg:col-end-11 ${fixedClass}`;
// const bp = 'lg:';

export const Footer: React.FC<IFooterProps> = ({
  backgroundCurved = '#fff',
  footerNavigation,
  imageUrls,
}) => (
  <>
    <Section
      curvedBackground={backgroundCurved}
      backgroundColor="bg-gradient-footer"
      extraClass="curved curved-top"
      id="footer"
      pt="pt-28"
      pb="pb-10"
      mdPt="md:pt-100"
      mb="mb-0"
      mdMb="md:mb-0"
      mW="max-w-full"
      mt="mt-0"
      mdMt="md:mt-0"
    >
      <Grid
        gapCols="gap-x-0"
        gapRows="gap-y-10"
        extraClass="grid-flow-row auto-rows-max w-full sm:w-none  sm:gap-x-9"
      >
        <div
          className={`row-start-2 col-start-1 col-end-13 sm:col-start-1 md:col-end-5 lg:col-end-3 ${fixedClass} `}
        >
          <Image
            src={imageUrls.logoWithTitle}
            alt="Qualogy logo"
            margin="0 auto"
            extraClass="w-40 "
          />

          <ContactLink href="mailto:info@qualogy.com" className="text-center">
            info@qualogy.com
          </ContactLink>
          <ContactLink href="tel:+31703195000" className="text-center">
            + 31 70 319 50 00
          </ContactLink>
        </div>

        {footerNavigation.map((group: any, groupIndex: number) => {
          const groupClass =
            groupIndex === 0
              ? groupOneClass
              : groupIndex === 1
              ? groupTwoClass
              : groupThreeClass;
          return (
            <div className={groupClass} key={`${groupIndex}${group.label}`}>
              <Paragraph color="white" fontWeight="bold">
                {group.label}
              </Paragraph>
              {group.sub_item.map((subItem: any, subItemIndex: number) => (
                // <Link href="" key={`${subItemIndex}${subItem.label}`}>
                <a href="" key={`${subItemIndex}${subItem.label}`}>
                  <Paragraph color="white">{subItem.label}</Paragraph>
                </a>
                // </Link>
              ))}
            </div>
          );
        })}
        <div
          className={`row-start-4 md:row-start-2 lg:row-start-2 col-start-1 col-end-13 md:col-start-11 md:col-end-13 lg:col-start-12 flex flex-row md:flex-col justify-around`}
        >
          <Image src={imageUrls.qualityControl1} alt="" margin="0" />
          <Image src={imageUrls.qualityControl2} alt="" margin="16px 0" />
        </div>
        <div
          className={`row-start-5 col-start-1 col-end-6 lg:col-end-3 flex justify-center md:justify-start`}
        >
          <SocialLink
            href="https://twitter.com"
            title="link to our twitter page"
          >
            <FaTwitter color="white" size="32px" />
          </SocialLink>
          <SocialLink
            target="_blank"
            href="https://linkedin.com"
            title="link to our twitter page"
          >
            <FaLinkedin color="white" size="32px" />
          </SocialLink>
          <SocialLink
            target="_blank"
            href="https://facebook.com"
            title="link to our twitter page"
          >
            <FaFacebook color="white" size="32px" />
          </SocialLink>
          <SocialLink
            target="_blank"
            href="https://youtube.com"
            title="link to our twitter page"
          >
            <FaYoutube color="white" size="32px" />
          </SocialLink>
        </div>
        <div
          className={`row-start-5 col-start-7 col-end-13 lg:col-start-3 lg:col-end-13 flex justify-center md:justify-end`}
        >
          <Paragraph color="white" className="w-full text-center lg:text-right">
            ©2021 Qualogy - All rights reserved - Privacy Policy - Sitemap
          </Paragraph>
        </div>
      </Grid>
    </Section>
    <Content
      width="100%"
      background="#000"
      height="5vh"
      mHeight="5vh"
    ></Content>
  </>
);

export default Footer;
