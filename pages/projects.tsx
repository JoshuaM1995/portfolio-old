import { ProjectCard } from "@components/index";
import { useCommitData } from "@hooks/useCommitData";
import { Spacer } from "@styles/global";
import { OpenInGithubButton, OpenInGithubLink, ProjectCardContainer, ProjectsContainer, TopProjectsCodeComment } from "@styles/projects";

const Projects = () => {
  const { data: spotalyticsCommitData, isLoading: isLoadingSpotalyticsCommitData } = useCommitData('spotalytics');
  const { data: pokedexCommitData, isLoading: isLoadingPokedexCommitData } = useCommitData('pokedex');

    return (
      <>
        <TopProjectsCodeComment>
          {`// Top Projects`}
        </TopProjectsCodeComment>

        <ProjectsContainer>
          <ProjectCardContainer>
            <ProjectCard
              repoName="spotalytics"
              hasBoxShadow={false}
              isLoading={isLoadingSpotalyticsCommitData}
              title="Spotalytics"
              commits={spotalyticsCommitData?.count ?? 0}
              projectUrl="https://spotalytics.netlify.app"
              code={`/**
  * Integrated Spotify API.
  * Added the following features:
  * Dashboard (artists, albums, etc.)
  * Analytics (tastes, countries)
  */`}
            />

            <Spacer bottom={30} />

            <OpenInGithubLink href="https://github.com/JoshuaM1995/spotalytics" target="_blank">
              Open in Github
            </OpenInGithubLink>
          </ProjectCardContainer>

          <ProjectCardContainer>
            <ProjectCard
              repoName="pokedex"
              hasBoxShadow={false}
              isLoading={isLoadingPokedexCommitData}
              title="Pokedex"
              commits={pokedexCommitData?.count ?? 0}
              projectUrl="#"
              code={`/**
  * Integrated Spotify API.
  * Added the following features:
  * Dashboard (artists, albums, etc.)
  * Analytics (tastes, countries)
  */`}
            />

            <Spacer bottom={30} />

            <OpenInGithubLink href="https://github.com/JoshuaM1995/pokedex" target="_blank">
              Open in Github
            </OpenInGithubLink>
          </ProjectCardContainer>
        </ProjectsContainer>
      </>
    )
}

export default Projects;