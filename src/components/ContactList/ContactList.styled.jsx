import styled from '@emotion/styled';

export const List = styled.ul`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.dark};
  list-style: disc;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;
export const Button = styled.button`
  margin-left: 10px;
  padding: 4px;
  overflow: hidden;
  border-radius: 4px;

  box-shadow: ${props => props.theme.shadows.medium};

  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.accent};
  font-weight: 600;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
    background-color: ${props => props.theme.colors.white};
  }
`;
