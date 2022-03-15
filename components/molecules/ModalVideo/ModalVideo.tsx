import React, { FC, useEffect, useState } from 'react';

export interface IModalVideoProps {
  closeModal: () => void;
  modal: boolean;
}

export const ModalVideo: FC<IModalVideoProps> = ({
  children,
  modal,
  closeModal,
}) => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    if (window && document) {
      document.addEventListener('mousewheel', () => {
        const elementStatic = document.getElementById('modal-static');
        if (elementStatic) {
          const newTop = elementStatic.offsetTop - window.scrollY;
          setTop(newTop + 48);
        }
      });
    }
    return () => {
      if (window && document) {
        document.removeEventListener('mousewheel', () => {});
      }
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-70 w-full max-w-screen-2xl h-96 mt-12 px-5 lg:px-10 transition-modal duration-1000 left-1/2 transform -translate-x-2/4 ${
          modal
            ? 'opacity-100 -translate-y-2/4'
            : 'opacity-0 pointer-events-none'
        } `}
        style={{ top: `${modal ? '50%' : top + 'px'}` }}
      >
        {children}
      </div>
      <div
        className={`bg-black  fixed top-0 left-0 w-full h-full z-60 transition-opacity duration-1000  ${
          modal ? 'opacity-30' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => closeModal()}
      ></div>
    </>
  );
};
