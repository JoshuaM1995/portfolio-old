import { HomeNameText, HomeText, WhoAmIText } from "@styles/home";
import Typist from "react-typist";

const Home = () => {
  return (
    <>
      <HomeText>Hello! I am</HomeText>
      <HomeNameText>Joshua McNabb</HomeNameText>
      <WhoAmIText>
        Passionate Software Developer
        <Typist.Backspace count={33} delay={200} />
        Avid Gamer
      </WhoAmIText>
    </>
  );
};

export default Home;
