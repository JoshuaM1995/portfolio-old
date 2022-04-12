import { ProjectCardCode } from "@components/ProjectCard/styles";
import { codeStyle } from "@styles/about";
import { AboutContext } from "context/AboutContext";
import { useContext } from "react";
import { useTheme } from "styled-components";

const About = () => {
  const { colors } = useTheme();
  const [aboutContext] = useContext(AboutContext);

  return (
    <ProjectCardCode language="typescript" showLineNumbers style={codeStyle(colors)}>
      {aboutContext}
    </ProjectCardCode>
  )
}

export default About;