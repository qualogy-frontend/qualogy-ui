import React from 'react';
import { BiDownArrowCircle, BiRightArrowCircle } from 'react-icons/bi';
import { ThemeColors, dateToText } from '../../../utils';
import { Button, IButtonProps } from '../../atoms/Button';
import { Icon, IconMapper } from '../../atoms/Icon';
import { Image } from '../../atoms/Image';
import { Row } from '../../atoms/Layout/Row';
import { Paragraph } from '../../atoms/Text';
import { CardLayout, CardText, ImageWrap } from './Card.style';

export interface ICardLargeImageProps {
  image: string;
  alt: string;
  text?: string | null;
  button?: IButtonProps | null;
  reversed?: boolean;
}

export const CardLargeImage: React.FC<ICardLargeImageProps> = ({
  image,
  alt,
  text,
  button,
  reversed,
}) => {
  return (
    <CardLayout>
      <ImageWrap>
        <Image
          margin={''}
          src={image}
          alt={alt}
          extraClass={`${reversed ? 'lg:ml-auto' : ''} mb-0`}
        />
      </ImageWrap>
      {text && (
        <CardText
          className={`${
            reversed
              ? 'w-full lg:right-0 xl:right-32 2xl:right-32'
              : 'lg:left-15 xl:left-28'
          }`}
        >
          <Paragraph fontSize="20px">{text}</Paragraph>
          {button && (
            <Button
              type="blank"
              width="initial"
              link={button.link}
              color={ThemeColors.linkFont}
            >
              <BiDownArrowCircle
                size="24px"
                style={{ color: ThemeColors.linkFont, marginRight: '8px' }}
              />
              <Paragraph fontSize="18px" fontWeight="400">
                {button.children}
              </Paragraph>
            </Button>
          )}
        </CardText>
      )}
    </CardLayout>
  );
};

export interface ICardSmallImageProps {
  bg?: string;
  color?: string;
  icon?: keyof typeof IconMapper;
  title?: string;
  content?: string;
  link?: string;
  iconColor?: string;
  shadow?: string;
}

export const CardContent: React.FC<ICardSmallImageProps> = ({
  bg,
  color,
  icon,
  title,
  content,
  link,
  iconColor,
  shadow = 'shadow-xl',
}) => {
  return (
    <div
      className={`card card__content rounded ${shadow} grid p-5 lg:px-10 lg:pt-16 lg:pb-10 ${
        color ? color : ''
      } ${bg ? bg : ''}`}
    >
      {icon && <Icon color={iconColor} icon={icon} extraClasses="mb-8" />}
      {title && <Paragraph className="font-bold pb-4">{title}</Paragraph>}
      {content && (
        <Paragraph className={`${color || 'text-gray-500'} pb-8`}>
          {content}
        </Paragraph>
      )}
      {link && (
        // <Link href={link}>
        <a
          className={`flex justify-end items-end ${
            color || 'text-gray-500'
          } w-full `}
        >
          <BiRightArrowCircle size={24} />
        </a>
        // </Link>
      )}
    </div>
  );
};

export interface ICardPostProps {
  author?: string;
  authorSlug?: string;
  date?: string;
  title?: string;
  body?: string;
  width?: string;
  image?: string;
  imgWidth?: string;
  slug?: string;
  alt?: string;
  loading?: boolean;
}

export const CardPost: React.FC<ICardPostProps> = ({
  author,
  // authorSlug,
  date,
  title,
  body,
  width,
  image = '',
  imgWidth,
  // slug,
  alt = '',
  loading = false,
}) => {
  // return <h1>Card</h1>;
  return (
    <CardLayout className="card__post" width={width} imgWidth={imgWidth}>
      {!loading ? (
        <Image src={image} alt={alt} margin="0" />
      ) : (
        <div className="h-64 w-full rounded bg-gray-700 animate-pulse	"></div>
      )}
      <Row justify="flex-start" margin="8px 0" height="initial">
        {!loading ? (
          // <Link href={`/authors/${authorSlug}`}>
          <a className="text-primary mr-4">{author}</a>
        ) : (
          // </Link>
          <div className="h-4 w-full mr-4 rounded bg-gray-700 animate-pulse	"></div>
        )}
        {!loading && date ? (
          <Paragraph color={ThemeColors.inactiveFont}>
            {dateToText(date)}
          </Paragraph>
        ) : (
          <div className="h-4 my-2 w-full rounded bg-gray-700 animate-pulse	"></div>
        )}
      </Row>
      {!loading ? (
        <Paragraph fontSize="22px" fontWeight="bold" margin="0 0 8px 0">
          {title}
        </Paragraph>
      ) : (
        <div className="h-4 my-2  w-full rounded bg-gray-700 animate-pulse	"></div>
      )}

      {!loading ? (
        <Paragraph className="post__body" color={ThemeColors.inactiveFont}>
          {body}
        </Paragraph>
      ) : (
        <div className="h-24 my-2  w-full rounded bg-gray-700 animate-pulse	"></div>
      )}

      {!loading ? (
        <Button type="blank" extraClasses="text-primary flex items-center">
          {/* <Link as={`/posts/${slug}`} href="/posts/[slug]"> */}
          <Paragraph fontSize="18px" margin="0 8px 0 0">
            Lees meer
          </Paragraph>
          {/* </Link> */}

          <BiRightArrowCircle size={24} />
        </Button>
      ) : (
        <div className="h-10 w-32 rounded bg-gray-700 animate-pulse	"></div>
      )}
    </CardLayout>
  );
};
