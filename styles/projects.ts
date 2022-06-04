import styled from 'styled-components';
import { CodeComment, Link } from './global';

export const TopProjectsCodeComment = styled(CodeComment)`
  margin-bottom: 30px;
`;

export const ProjectsContainer = styled.div`
  display: flex;

  & > :first-child {
    margin-right: 30px;
  }
`;

export const ProjectCardContainer = styled.div``;

export const OpenInGithubLink = styled(Link)`
  color: #7badbd;
  border: 1px solid #222832;
  border-radius: 30px;
  font-size: 0.8rem;
  padding: 15px;

  &:hover {
    background: #222832;
  }
`;
