import { ProjectCardCode } from "@components/ProjectCard/styles";
import { codeStyle } from "@styles/about";
import { AboutContext } from "context/AboutContext";
import { useContext } from "react";
import { useTheme } from "styled-components";

const About = () => {
  const { colors } = useTheme();
  const [aboutContext] = useContext(AboutContext);

  return (
    <ProjectCardCode
      language="typescript"
      showLineNumbers
      wrapLines
      lineProps={{ style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' } }}
      style={codeStyle(colors)}>
      {aboutContext}
    </ProjectCardCode>
  )
}

export default About;