import { styled, Theme } from '@styles/theme';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const ProjectCardContainer = styled.div<{ hasBoxShadow: boolean }>`
  background: #0d1116;
  border: 1px solid #19242e;
  width: 400px;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: ${({ hasBoxShadow }) =>
    hasBoxShadow ? '0px -25px 50px #17222d, 0px 25px 50px #17222d' : 'none'};
`;

export const ProjectCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  border-radius: 6px;
`;

export const ProjectCardName = styled.a`
  color: #b68f41;
  text-decoration: none;
`;

export const ProjectCardCommits = styled.a`
  color: #343e4a;
  text-decoration: none;
`;

export const ProjectCardCodeLink = styled.a`
  text-decoration: none;
`;

export const ProjectCardCode = styled(SyntaxHighlighter)``;

export const ProjectCardLinkContainer = styled.div`
  background: #896d35;
  width: 100%;
  padding: 0.2rem;
`;

export const ProjectCardLink = styled.a`
  color: #2c261b;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const projectCardCodeStyle = (colors: Theme['colors']) => ({
  hljs: {
    display: 'block',
    overflowX: 'auto',
    padding: '0.5em',
    color: colors.terminal.code.text,
    backgroundColor: colors.terminal.code.background,
    marginBottom: 0,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  'hljs-comment': {
    color: colors.terminal.code.comment,
    fontStyle: 'italic',
  },
});
