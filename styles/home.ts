import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
