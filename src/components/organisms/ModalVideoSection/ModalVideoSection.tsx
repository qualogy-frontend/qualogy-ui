import React, { FC, useState } from 'react';
import { BiPlay } from 'react-icons/bi';
import { Section } from '../../atoms';
import { ModalVideo } from '../../molecules';

interface IPlayer {
  type: 'video' | 'iframe';
  link: string;
}

export interface IModalVideoSectionProps {
  data: {
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
  baseUrl?: string;
}

export const Player: FC<IPlayer> = ({ type, link }) => {
  //
  switch (type) {
    case 'iframe':
      return (
        <iframe
          width="100%"
          height="100%"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      );
    case 'video':
      return (
        <video className="h-full " width="100%" height="100%" controls>
          <source src={link} type="video/mp4" />
          <source src={link} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      );
    default:
      return (
        <video className="h-full" width="100%" height="100%" controls>
          <source src={link} type="video/mp4" />
          <source src={link} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      );
  }
};

export const ModalVideoSection: FC<IModalVideoSectionProps> = ({
  data,
  baseUrl,
}) => {
  const [modal, setModal] = useState(false);
  const link =
    data.link ||
    (data.file.length > 0
      ? `${baseUrl ? baseUrl : ''}${data.file[0].url}`
      : '');
  //  modal ? 'https://www.youtube.com/embed/bIrm37MIK5U' : 'https://www.youtube.com/embed/bIrm37MIK5U?start=0'
  return (
    <Section>
      <div
        id="modal-static"
        className={`relative z-20 w-full max-w-screen-2xl h-96 mt-12 transition-all duration-1000 `}
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
        <Player type={data.type} link={link} />
      </ModalVideo>
    </Section>
  );
};
