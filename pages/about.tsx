import { codeStyle } from "@styles/about";
import { ProjectCardCode } from "@styles/home";
import { aboutContent } from "content/about/about";
import { useTheme } from "styled-components";

const About = () => {
  const { colors } = useTheme();

  return (
    <ProjectCardCode language="typescript" showLineNumbers style={codeStyle(colors)}>
      {aboutContent}
    </ProjectCardCode>
  )
}

export default About;