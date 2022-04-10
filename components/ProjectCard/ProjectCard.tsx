import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from '@styles/theme/dark/colors'
import React from 'react'
import { ProjectCardCode, ProjectCardCodeLink, projectCardCodeStyle, ProjectCardCommits, ProjectCardContainer, ProjectCardName, ProjectCardTitle } from './styles'

interface ProjectCardProps {
  title: string;
  titleUrl: string;
  commits: number;
  commitsUrl: string;
  projectUrl: string;
  code: string;
};

export const ProjectCard = ({ title, titleUrl, commits, commitsUrl, projectUrl, code }: ProjectCardProps) => {
  return (
    <ProjectCardContainer>
      <ProjectCardTitle>
        <ProjectCardName href={titleUrl} target="_blank">{title}</ProjectCardName>
        <ProjectCardCommits href={commitsUrl} target="_blank">
          <FontAwesomeIcon icon={faHistory} /> {commits} commits
        </ProjectCardCommits>
      </ProjectCardTitle>

      <ProjectCardCodeLink href={projectUrl} target="_blank" rel="noreferrer">
        <ProjectCardCode language="typescript" showLineNumbers style={projectCardCodeStyle(colors)}>
          {code}
        </ProjectCardCode>
      </ProjectCardCodeLink>
    </ProjectCardContainer >
  )
}
