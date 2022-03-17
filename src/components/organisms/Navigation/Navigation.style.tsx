import styled from 'styled-components';
import { ThemeColors } from '../../../utils';

export const NavigationLayout = styled.nav`
  padding: 8px 30px;
  border-radius: 6px;
  background-color: ${ThemeColors.navigationBackground};
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 60px;
  margin-top: 40px;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 8px 15px;
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
`;

export const Dropdown = styled.div`
  border-radius: 6px;
  background-color: ${ThemeColors.navigationBackground};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  min-width: 100px;
  padding: 8px 15px;
  z-index: 2;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    position: static;
    left: 0;
    padding: 0;
    transform: translateX(0);
  }
`;

export const Slash = styled.span`
  color: ${ThemeColors.inactiveFont};
  margin: 0 4px;
`;

export const ButtonWrapper = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: center;
    margin-left: 15px;
  }

  @media (max-width: 1024px) {
  }
`;

export const SFaChevronDown = styled.span`
  margin: 2px 0 0 4px;
  display: inline-block;
`;

export const dropDownStyle = {
  marginLeft: '4px',
  fontSize: '12px',
};
