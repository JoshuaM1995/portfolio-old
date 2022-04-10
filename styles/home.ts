import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Typist from 'react-typist';
import { styled, Theme } from './theme';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WhoAmIWrapper = styled.div``;

export const HomeText = styled.div`
  color: ${({ theme: { colors } }) => colors.home.text};
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const HomeNameText = styled.div`
  color: ${({ theme: { colors } }) => colors.home.nameText};
  font-size: 3.5rem;
  margin-bottom: 15px;
`;

export const WhoAmIText = styled(Typist)`
  color: ${({ theme: { colors } }) => colors.home.whoAmIText};
  font-size: 1.5rem;
  margin-bottom: 200px;
`;

export const WhereToNextText = styled.p`
  color: ${({ theme: { colors } }) => colors.home.text};
  font-size: 0.9rem;
  margin: 0;
  margin-bottom: 10px;
`;

export const WhereToNextComment = styled(WhereToNextText)`
  color: ${({ theme: { colors } }) => colors.terminal.code.comment};
  margin-bottom: 20px;
`;

export const WhereToInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const WhereToInputChevronIcon = styled(FontAwesomeIcon)`
  color: ${({ theme: { colors } }) => colors.home.whereToText};
  margin-right: 10px;
  font-size: 1.3rem;
`;

export const WhereToInputCommand = styled.p`
  margin: 0;
  margin-right: 0.5rem;
  color: ${({ theme: { colors } }) => colors.home.whereToText};
  font-size: 1.3rem;
`;

export const WhereToInput = styled.input`
  all: unset;
  color: ${({ theme: { colors } }) => colors.home.whereToText};
  font-size: 1.3rem;
`;

export const ProjectsWrapper = styled.div`
  text-decoration: none;
`;

export const ProjectCard = styled.div`
  background: #0d1116;
  border: 1px solid #19242e;
  width: 400px;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0px -25px 50px #17222d, 0px 25px 50px #17222d;
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

// export const ProjectCardCode = styled.div`
//   color: ${({ theme: { colors } }) => colors.terminal.code.comment};
//   background: #0b0d12;
//   font-size: 0.8rem;
//   border: 1px solid #05070b;
//   height: 50%;
//   border-radius: 8px;
//   padding: 2rem;
// `;

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