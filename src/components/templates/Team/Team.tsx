import React, { useState } from 'react';
import Ticker from 'react-ticker';
import { Paragraph } from '../../atoms';
import { ITeamProps } from './Team.interface';

export const Team: React.FC<ITeamProps> = ({ data, imageBase }) => {
  const { title, employee } = data;
  const [hoverToggle, setHoverToggle] = useState(true);

  return (
    <section id="our-people">
      <div className="w-full max-w-screen-2xl mx-auto px-5 md:px-10 my-20 md:mt-24 flex flex-col lg:flex-row">
        <Paragraph fontWeight="bold">{title}</Paragraph>
      </div>
      <Ticker speed={3} move={hoverToggle}>
        {() => (
          <div className="flex flex-nowrap flex-row">
            {employee.map((item: any, i) => (
              <div
                className="relative shadow-xl mx-6 mb-8 rounded-md overflow-hidden whitespace-nowrap"
                style={{ height: '290px', width: '260px' }}
                onMouseEnter={() => setHoverToggle(false)}
                onMouseLeave={() => setHoverToggle(true)}
                key={i}
              >
                <img
                  className="absolute inset-1/2 transform -translate-x-2/4 -translate-y-2/4 w-full"
                  src={`${imageBase ? imageBase : ''}${item.image.url}`}
                />
              </div>
            ))}
          </div>
        )}
      </Ticker>
    </section>
  );
};
