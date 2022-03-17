import { useEffect, useState, useRef } from 'react';

const useNavigation = () => {
  const [activeToggle, setActiveToggle] = useState('');
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const [toggleLang, setToggleLang] = useState('NL');
  const selectorRef = useRef<any>(null);
  const secondSelectorRef = useRef<any>(null);

  useEffect(() => {
    if (activeToggle.length > 0) {
      const handleClickOutside = (e: any) => {
        const notSelector =
          selectorRef &&
          !selectorRef.current.contains(e.target) &&
          secondSelectorRef &&
          !secondSelectorRef.current.contains(e.target);
        //
        if (notSelector) {
          setActiveToggle('');
        }
        if (mobileMenuToggle && notSelector) {
          e.stopPropagation();
          setMobileMenuToggle(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
    return () => {};
  }, [activeToggle]);

  return {
    activeToggle,
    setActiveToggle,
    toggleLang,
    setToggleLang,
    mobileMenuToggle,
    setMobileMenuToggle,
    selectorRef,
    secondSelectorRef,
  };
};

export default useNavigation;
