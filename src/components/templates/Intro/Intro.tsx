import React, { useState, useEffect, useRef } from 'react';
import { BiDownArrowCircle, BiPlay } from 'react-icons/bi';
import {
  Button,
  IButtonProps,
  IImageProps,
  H1Tag,
  Paragraph,
  Circle,
  Section,
} from '../../atoms';
import { ModalVideo } from '../../molecules';
import { Player } from '../../organisms';
import { PageProps, bgColors } from './Intro.interface';
import { ThemeColors } from '../../../utils';

type DataProps = {
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
};

interface IIntroProps extends PageProps {
  data: DataProps;
}

export const topCircles = () => {
  return (
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
};

export const Intro: React.FC<IIntroProps> = ({ data, background_color }) => {
  const [modal, setModal] = useState(false);
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
  const link =
    video?.link ||
    (video?.file.length > 0
      ? `${process.env.STRAPI_URL}${video.file[0].url}`
      : '');
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
                src={`${process.env.STRAPI_URL}${image[0].src}`}
                alt={image[0].alt}
              />
            </div>
          )}
          {video && (
            <>
              <div
                id="modal-static"
                className={`relative z-20 w-full max-w-screen-2xl h-96 mt-4 lg:mt-12 transition-all duration-1000 bg-primary`}
                //style={{ top: `${modal ? "50% " : top + "px"}` }}
                onClick={() => setModal(true)}
              >
                <div
                  //ref={modalRef}
                  className="flex justify-center items-center bg-home-banner bg-cover bg-center w-full h-full rounded shadow-xl pt-12"
                >
                  <span className="rounded-full p-2 bg-black bg-opacity-75 cursor-pointer">
                    <BiPlay color="white" size={52} />
                  </span>
                </div>
              </div>
              <ModalVideo modal={modal} closeModal={() => setModal(false)}>
                <Player type={data.video.type} link={link} />
              </ModalVideo>
            </>
          )}
        </div>
      </Section>
      {topCircles()}
    </>
  );
};
