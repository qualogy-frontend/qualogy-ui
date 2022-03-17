import styled from 'styled-components';

type TagProps = {
  border: string;
};

export const TagLayout = styled.button<TagProps>`
  border: ${(props) => props.border};
  border-radius: 20px;
  padding: 4px 8px;
`;
