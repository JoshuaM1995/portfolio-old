import { faHistory, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ProjectCardCode, ProjectCardCodeLink, projectCardCodeStyle, ProjectCardCommits, ProjectCardContainer, ProjectCardName, ProjectCardTitle } from './styles'
import { useTheme } from "styled-components";

interface ProjectCardProps {
  title: string;
  repoName: string;
  commits: number;
  projectUrl: string;
  code: string;
  isLoading?: boolean;
  hasBoxShadow?: boolean;
};

export const ProjectCard = ({ title, repoName, commits, projectUrl, code, isLoading, hasBoxShadow = true }: ProjectCardProps) => {
  const { colors } = useTheme();

  return (
    <ProjectCardContainer hasBoxShadow={hasBoxShadow}>
      <ProjectCardTitle>
        <ProjectCardName href={`https://github.com/JoshuaM1995/${repoName}`} target="_blank">{title}</ProjectCardName>
        <ProjectCardCommits href={`https://github.com/JoshuaM1995/${repoName}/commits`} target="_blank">
          <FontAwesomeIcon
            icon={isLoading ? faSpinner : faHistory}
            spin={isLoading}
          /> {isLoading ? 'Loading commits...' : `${commits} commits`}
        </ProjectCardCommits>
      </ProjectCardTitle>

      <ProjectCardCodeLink href={projectUrl} target="_blank" rel="noreferrer">
        {/* @ts-ignore */}
        <ProjectCardCode language="typescript" showLineNumbers style={projectCardCodeStyle(colors)}>
          {code}
        </ProjectCardCode>
      </ProjectCardCodeLink>
    </ProjectCardContainer >
  )
}
