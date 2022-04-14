import { styled } from './theme';

export const Link = styled.a`
  all: unset;
  cursor: pointer;
`;

export const Button = styled.button`
  all: unset;
`;

export const Text = styled.p`
  margin: 0;
`;

export const CodeComment = styled(Text)`
  color: ${({ theme: { colors } }) => colors.terminal.code.comment};
`;

export const Spacer = styled.div<{
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}>`
  margin-top: ${({ top }) => top && `${top}px`};
  margin-right: ${({ right }) => right && `${right}px`};
  margin-bottom: ${({ bottom }) => bottom && `${bottom}px`};
  margin-left: ${({ left }) => left && `${left}px`};
`;
