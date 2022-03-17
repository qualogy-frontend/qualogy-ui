import React, { FC } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { RiMenuFill } from 'react-icons/ri';
import { Anchor, Button, Image, Title } from '../../atoms';
import { BreadCrumb } from '../../molecules';
import {
  NavigationLayout,
  LogoLink,
  Dropdown,
  ButtonWrapper,
  Slash,
  SFaChevronDown,
} from './Navigation.style';
import { ThemeColors } from '../../../utils';
import useNavigation from './Navigation.hooks';

type dropdownProps = {
  label: string;
  link: string;
};

type menuItemsProps = {
  label: string;
  link: string;
  target: string;
  icon?: string;
  sub_item: dropdownProps[];
};

type LangProps = {
  locale: boolean;
  lang: string;
};

export interface INavigationProps {
  head?: React.ReactNode;
  editTheme?: (props: any) => void;
  lang: LangProps;
  items: menuItemsProps[];
}

export const Navigation: FC<INavigationProps> = ({ head, lang, items }) => {
  const {
    activeToggle,
    setActiveToggle,
    mobileMenuToggle,
    setMobileMenuToggle,
    selectorRef,
    secondSelectorRef,
  } = useNavigation();

  const toggleLang = (lang: string) => {
    console.log(lang);
  };

  return (
    <>
      {head}
      <NavigationLayout>
        <LogoLink href="/" title="home">
          <Image
            margin="0"
            src={`${process.env.STRAPI_URL}/assets/logo/logo.png`}
            alt=""
          />
          <Title
            color={ThemeColors.primaryFont}
            fontSize="18px"
            margin="0 0 0 8px"
          >
            Front
          </Title>
        </LogoLink>
        <div className="lg:hidden ml-auto" ref={secondSelectorRef}>
          <Button
            type="blank"
            extraClasses="flex justify-center items-center"
            action={() => setMobileMenuToggle(!mobileMenuToggle)}
          >
            <RiMenuFill className="w-7 h-7 border-white stroke-white fill-white" />
          </Button>
        </div>
        <div
          ref={selectorRef}
          className={`${
            mobileMenuToggle ? 'flex' : 'hidden'
          } absolute bg-darkBrown rounded-lg w-full lg:w-auto left-0 top-full -mt-2 lg:-mt-0 lg:right-0 lg:static flex-col lg:flex-row lg:flex lg:ml-auto items-center py-4 lg:py-0`}
        >
          {items.map((items: menuItemsProps, index: number) => {
            return (
              <Anchor
                type="menu"
                extraClasses="border-t lg:border-t-0 py-2 lg:py-0 px-4 lg:px-0 border-white w-full flex items-center whitespace-nowrap"
                link={
                  items.sub_item.length <= 0
                    ? `${items.link}?lang=${lang.lang}`
                    : items.link
                }
                action={() =>
                  setActiveToggle(
                    activeToggle === items.label ? '' : items.label
                  )
                }
                key={index}
              >
                {items.label}
                {items.sub_item.length > 0 && (
                  <SFaChevronDown>
                    {activeToggle === items.label ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </SFaChevronDown>
                )}

                {items.sub_item.length > 0 && activeToggle === items.label && (
                  <Dropdown>
                    {items.sub_item.map(
                      (dropdownItem: dropdownProps, index: number) => (
                        // <Link href={dropdownItem.link}>
                        <Button
                          key={index}
                          type="dropdown-menu"
                          action={() => {}}
                        >
                          {dropdownItem.label}
                        </Button>
                        // </Link>
                      )
                    )}
                  </Dropdown>
                )}
              </Anchor>
            );
          })}

          <div className="flex flex-col w-full md:flex-row justify- lg:items-center md:mt-0 ">
            <ButtonWrapper className="border-t lg:border-t-0  border-white py-2 lg:py-0 px-4 lg:px-0 ml-0">
              <Button
                type={
                  'nl' === lang.lang.toLowerCase()
                    ? 'toggle'
                    : 'toggle-inactive'
                }
                action={() => toggleLang('nl')}
              >
                NL
              </Button>
              <Slash>/</Slash>
              <Button
                type={
                  'en' === lang.lang.toLowerCase()
                    ? 'toggle'
                    : 'toggle-inactive'
                }
                action={() => toggleLang('en')}
              >
                EN
              </Button>
            </ButtonWrapper>
          </div>
        </div>
      </NavigationLayout>
      <BreadCrumb
        navItems={[
          { text: 'Vacatures', link: '/' },
          { text: 'Cloud Engineer', link: '/' },
        ]}
      />
    </>
  );
};
