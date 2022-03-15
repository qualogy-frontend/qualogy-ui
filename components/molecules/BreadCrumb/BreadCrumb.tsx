import React from 'react';
import { BiChevronRight, BiHomeAlt } from 'react-icons/bi';
import { Button } from '../../atoms/Button';

interface IBreadCrumbProps {
  navItems: { text: string; link: string }[];
}

export const BreadCrumb: React.FC<IBreadCrumbProps> = ({ navItems }) => {
  const defaultItem = { text: 'Home', link: '/' };
  navItems = [defaultItem, ...navItems];

  return (
    <div className="flex mt-4 lg:mt-8">
      {navItems.length > 1 && (
        <>
          {navItems.map((item, index: number) => (
            <div
              className="flex justify-center items-center "
              id={`breadcrumb-${item.text}-${index}`}
              key={`breadcrumb-${item.text}-${index}`}
            >
              {index === 0 ? (
                <BiHomeAlt
                  key={`${index}-arrow-right`}
                  color="white"
                  style={{ marginRight: '4px' }}
                />
              ) : (
                <BiChevronRight
                  size="32px"
                  key={`${index}-arrow-right`}
                  color="white"
                />
              )}
              <a href={item.link} key={`${index}-link`}>
                <Button
                  link={item.link}
                  type="blank"
                  extraClasses={`text-white`}
                  action={() => {}}
                >
                  {item.text}
                </Button>
              </a>
            </div>
          ))}
        </>
      )}
    </div>
  );
};
