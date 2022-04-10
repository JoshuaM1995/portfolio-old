import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Typist from 'react-typist';
import { styled } from './theme';

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
  color: ${({ theme: { colors } }) => colors.terminal.comment.color};
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

export const ProjectsWrapper = styled.div``;

export const ProjectCard = styled.div`
  background: #0d1116;
  border: 1px solid #19242e;
  width: 400px;
  height: 250px;
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

export const ProjectCardName = styled.p`
  margin: 0;
  color: #b68f41;
`;

export const ProjectCardCommits = styled.p`
  margin: 0;
  color: #343e4a;
`;

// export const ProjectCardCode = styled.div`
//   color: ${({ theme: { colors } }) => colors.terminal.comment.color};
//   background: #0b0d12;
//   font-size: 0.8rem;
//   border: 1px solid #05070b;
//   height: 50%;
//   border-radius: 8px;
//   padding: 2rem;
// `;

export const ProjectCardCode = styled(SyntaxHighlighter)``;