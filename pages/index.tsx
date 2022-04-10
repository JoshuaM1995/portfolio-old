import { ProjectCard } from '@components/index';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { HomeContainer, HomeNameText, HomeText, ProjectsWrapper, WhereToInput, WhereToInputChevronIcon, WhereToInputCommand, WhereToInputContainer, WhereToNextComment, WhereToNextText, WhoAmIText, WhoAmIWrapper } from "@styles/home";
import axios from 'axios';
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useQuery } from 'react-query';
import Typist from "react-typist";

const Home = () => {
  const [whereToValue, setWhereToValue] = useState('');
  const { push } = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  const { data: { data }, isLoading, isError } = useQuery<any, any, { data: { count: number } }>('spotalytics-commits', ({ signal }) =>
    axios.get('/api/github/repo/spotalytics', {
      signal,
    }),
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );

  console.log({ data, isError, isLoading })

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
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
          <WhereToInput ref={inputRef} value={whereToValue} onChange={({ target: { value } }) => setWhereToValue(value)} onKeyDown={handleKeyDown} />
        </WhereToInputContainer>
      </WhoAmIWrapper>

      <ProjectsWrapper>
        <ProjectCard
          title="Spotalytics"
          titleUrl="https://github.com/JoshuaM1995/spotalytics"
          commits={data?.count ?? 0}
          commitsUrl="https://github.com/JoshuaM1995/spotalytics/commits/master"
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