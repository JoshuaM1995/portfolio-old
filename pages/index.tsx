import { ProjectCard } from '@components/index';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import useApiRequest from '@hooks/useApiRequest';
import { useCommitData } from '@hooks/useCommitData';
import { HomeContainer, HomeNameText, HomeText, ProjectsWrapper, WhereToInput, WhereToInputChevronIcon, WhereToInputCommand, WhereToInputContainer, WhereToNextComment, WhereToNextText, WhoAmIText, WhoAmIWrapper } from "@styles/home";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Typist from "react-typist";

const Home = () => {
  const [whereToValue, setWhereToValue] = useState('');
  const { push } = useRouter();
  const inputRef = useRef<HTMLInputElement>();
  const { data, isLoading } = useCommitData('spotalytics');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      if (whereToValue === 'hello') {
        alert("You're already here, silly")
      }

      if (whereToValue === 'about') {
        push('/about');
      }

      if (whereToValue === 'projects') {
        push('/projects');
      }
    }
  };

  return (
    <HomeContainer>
      <WhoAmIWrapper>
        <HomeText>Hello! I am</HomeText>
        <HomeNameText>Joshua McNabb</HomeNameText>
        <WhoAmIText>
          Avid Gamer
          <Typist.Backspace count={10} delay={1000} />
          Passionate Software Developer
        </WhoAmIText>

        <WhereToNextText>
          Where do you want to go next?
        </WhereToNextText>
        <WhereToNextComment>
          {`// type in "about" or "projects" below and press enter`}
        </WhereToNextComment>

        <WhereToInputContainer>
          <WhereToInputChevronIcon icon={faChevronRight} />
          <WhereToInputCommand>open</WhereToInputCommand>
          <WhereToInput
            ref={inputRef}
            value={whereToValue}
            onChange={({ target: { value } }) => setWhereToValue(value)}
            onKeyDown={handleKeyDown}
          />
        </WhereToInputContainer>
      </WhoAmIWrapper>

      <ProjectsWrapper>
        <ProjectCard
          repoName="spotalytics"
          isLoading={isLoading}
          title="Spotalytics"
          commits={data?.count ?? 0}
          projectUrl="https://spotalytics.netlify.app"
          code={`/**
* Integrated Spotify API.
* Added the following features:
* Dashboard (artists, albums, etc.)
* Analytics (tastes, countries)
*/`}
        />
      </ProjectsWrapper>
    </HomeContainer>
  );
};

export default Home;