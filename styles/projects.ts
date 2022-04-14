import styled from 'styled-components';
import { Link, Button, CodeComment } from './global';

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
  font-size: 0.9rem;
  padding: 15px;

  &:hover {
    background: red;
  }
`;

export const OpenInGithubButton = styled(Button)``;
