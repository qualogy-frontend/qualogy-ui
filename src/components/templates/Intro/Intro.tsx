import React, { useState, useEffect, useRef } from 'react';
import { BiDownArrowCircle } from 'react-icons/bi';
import {
  Button,
  IButtonProps,
  IImageProps,
  H1Tag,
  Paragraph,
  Section,
} from '../../atoms';
import { TopCircle } from '../../molecules';
import { ModalVideoSection } from '../../organisms';
import { PageProps, bgColors } from './Intro.interface';

interface DataProps {
  id: number;
  title: string;
  content: string;
  button: IButtonProps;
  image?: IImageProps[];
  background_color?: keyof typeof bgColors;
  video: {
    name: string;
    link?: string;
    type: 'video' | 'iframe';
    file: [
      {
        id: number;
        name: string;
        alternativeText: string;
        caption: string;

        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        provider: string;

        created_at: string;
        updated_at: string;
      }
    ];
  };
}

export interface IIntroProps extends PageProps {
  data: DataProps;
  baseUrl?: string;
}

export const Intro: React.FC<IIntroProps> = ({
  data,
  background_color,
  baseUrl,
}) => {
  const navSectionHeight = 75;
  const [topContentDivHeight, setTopContentDivHeight] = useState(0);
  const topContentDivRef = useRef<HTMLDivElement>(null);
  const { title, content, button, video, image } = data;

  const updateTopContentDivHeight = () => {
    if (topContentDivRef?.current?.clientHeight) {
      setTopContentDivHeight(
        topContentDivRef?.current?.clientHeight + navSectionHeight
      );
    }
  };

  useEffect(() => {
    updateTopContentDivHeight();
    window.addEventListener('resize', updateTopContentDivHeight);
    return () =>
      window.removeEventListener('resize', updateTopContentDivHeight);
  }, []);

  const bgColor = background_color
    ? bgColors[background_color]
    : 'bg-transparent';
  const hasImage = image && image.length > 0;

  return (
    <>
      <Section
        backgroundColor={bgColor}
        extraClass={`curved ${
          hasImage
            ? 'min-h-screen-50 2xl:min-h-screen-60'
            : video
            ? 'min-h-screen-90 2xl:min-h-screen-80'
            : ''
        } md:min-h-screen-70 lg:min-h-screen-80 xl:min-h-screen-70 `}
        curvedHeight={`${
          hasImage ? '40vh' : video ? `${topContentDivHeight}px` : ''
        }`}
        curvedHeightResponsive={`${
          hasImage || video ? `md:${topContentDivHeight}px` : ''
        }`}
        mb=""
        mdMb=""
        mt="mt-0"
        mdMt="md:mt-0"
        pt="pt-16"
        mdPt="md:pt-24"
        mW="max-w-screen-none"
      >
        <div className="min-h-2/4 lg:min-h-2/4 w-full h-full mx-auto z-10 max-w-screen-2xl 2xl:px-10">
          <div
            ref={topContentDivRef}
            className={`pt-16 sm:pt-30 ${
              video || hasImage ? 'mx-auto text-center py-10' : 'pb-20 sm:pb-28'
            } lg:w-4/5 xl:w-3/5 `}
          >
            <H1Tag
              lgText={video || hasImage ? 'lg:text-5xl' : 'lg:text-6xl'}
              color="text-white"
            >
              {title}
            </H1Tag>

            <p className="antialiased font-sans text-white text-lg md:text-xl lg:text-2xl font-normal mt-4 mb-30">
              {content}
            </p>
            {button && (
              <div
                className={`mt-10 md:mt-15 lg:mt-20 ${
                  video || hasImage ? 'flex justify-center' : ''
                }`}
              >
                <Button
                  type="blank"
                  link={button.link}
                  extraClasses="flex items-center text-white"
                >
                  <BiDownArrowCircle
                    size="24px"
                    style={{ marginRight: '8px' }}
                  />
                  <Paragraph fontSize="22px">{button.children}</Paragraph>
                </Button>
              </div>
            )}
          </div>
          {image && image.length > 0 && image[0].src && (
            <div className="h-32 lg:h-96 w-full lg:mt-8">
              <img
                className="h-full w-full object-cover rounded"
                src={`${baseUrl ? baseUrl : ''}${image[0].src}`}
                alt={image[0].alt}
              />
            </div>
          )}
          {video && <ModalVideoSection data={data.video} />}
        </div>
      </Section>
      <TopCircle />
    </>
  );
};
