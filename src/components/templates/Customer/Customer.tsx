import React from 'react';
import { H2Tag, Image } from '../../atoms';
import { ICustomerInterface } from './Customer.interface';

export const Customer: React.FC<ICustomerInterface> = ({
  data,
  contentAlign = `text-center`,
  imageBase = process.env.STRAPI_URL,
}) => {
  const { content, customers } = data;
  return (
    <section
      className="w-full max-w-screen-2xl mx-auto px-5 md:px-10 mt-20 lg:mt-26 xl:mt-40 flex flex-col lg:flex-row lg:items-center"
      id="our-customers"
    >
      <div className={`lg:w-2/4 mr:mx-20 ${contentAlign}`}>
        <H2Tag>{content}</H2Tag>
      </div>
      <div className="lg:ml-5 xl:ml-20 lg:w-2/4">
        <div className="flex flex-row flex-wrap">
          {customers.map((image, index) => (
            <div
              className="w-1/3 flex items-center justify-center mb-4"
              key={index}
            >
              <Image
                key={index + image.alternativeText}
                src={`${imageBase}${image.url}`}
                alt={image.alternativeText}
                margin="0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
