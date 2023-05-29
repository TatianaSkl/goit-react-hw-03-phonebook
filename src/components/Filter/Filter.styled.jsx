import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  display: block;
  width: 30%;
  height: 40px;
  padding: 11px 12px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 4px;
  outline: transparent;
  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: border-color, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.white};

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;
