import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { HomeNameText, HomeText, WhereToInput, WhereToInputChevronIcon, WhereToInputContainer, WhereToNextComment, WhereToNextText, WhoAmIText } from "@styles/home";
import { useRouter } from "next/router";
import { useState } from "react";
import Typist from "react-typist";

const Home = () => {
  const [whereToValue, setWhereToValue] = useState('');
  const { push } = useRouter();

  console.log('whreToValue', whereToValue);

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
    <>
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
        <WhereToInput value={whereToValue} onChange={({ target: { value } }) => setWhereToValue(value)} onKeyDown={handleKeyDown} />
      </WhereToInputContainer>
    </>
  );
};

export default Home;
