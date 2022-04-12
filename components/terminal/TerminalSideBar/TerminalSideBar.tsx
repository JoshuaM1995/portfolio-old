import { aboutContent } from "@content/about";
import { hikingContent, laravelContent, listeningToMusicContent, longboardingContent, nodeContent, reactContent, watchingMoviesContent } from "@content/interests";
import { videoGamesContent } from "@content/interests/free-time/video-games";
import noContent from "@content/noContent";
import { faLaravel, faMarkdown, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutContext } from "context/AboutContext";
import Tree, { TreeProps } from "rc-tree";
import { useContext } from "react";
import { TerminalSideBarContainer, TerminalSideBarText, TerminalSideBarTreeContainer, treeStyle } from "./styles";

export const TerminalSideBar = () => {
  const [, setAboutContext] = useContext(AboutContext);

  return (
    <TerminalSideBarContainer>
      <TerminalSideBarText>Explorer</TerminalSideBarText>

      <TerminalSideBarTreeContainer>
        <Tree
          treeData={getTreeData()}
          defaultExpandAll
          defaultSelectedKeys={['1']}
          style={treeStyle}
          onSelect={(selectedKey) => setAboutContext(getContentByKey(selectedKey[0] as string))}
        />
      </TerminalSideBarTreeContainer>
    </TerminalSideBarContainer>
  );
};

const getTreeData = (): TreeProps['treeData'] => [
  {
    key: '0',
    title: 'MY INTERESTS',
    icon: <FontAwesomeIcon icon={faFolder} color="#89BFD0" />,
    children: [
      { key: '0-0', title: 'laravel.php', icon: <FontAwesomeIcon icon={faLaravel} color="#FE281B" /> },
      { key: '0-1', title: 'node.js', icon: <FontAwesomeIcon icon={faNodeJs} color="#84CE24" /> },
      { key: '0-2', title: 'React.jsx', icon: <FontAwesomeIcon icon={faReact} color="#61DAFB" /> },
      {
        key: '0-3',
        title: 'Free Time',
        icon: <FontAwesomeIcon icon={faFolder} color="#89BFD0" />,
        children: [
          { key: '0-3-1', title: 'hiking.md', icon: <FontAwesomeIcon icon={faMarkdown} color="#fff" /> },
          { key: '0-3-2', title: 'longboarding.md', icon: <FontAwesomeIcon icon={faMarkdown} color="#fff" /> },
          { key: '0-3-3', title: 'listening_to_music.md', icon: <FontAwesomeIcon icon={faMarkdown} color="#fff" /> },
          { key: '0-3-4', title: 'video_games.md', icon: <FontAwesomeIcon icon={faMarkdown} color="#fff" /> },
          { key: '0-3-5', title: 'watching_movies.md', icon: <FontAwesomeIcon icon={faMarkdown} color="#fff" /> },
        ]
      },
    ],
  },
  {
    key: '1',
    title: 'about_me.md',
    icon: <FontAwesomeIcon icon={faMarkdown} color="#fff" />,
  },
];

const getContentByKey = (key: string) => {
  switch (key) {
    case '0-0':
      return laravelContent;

    case '0-1':
      return nodeContent;

    case '0-2':
      return reactContent;

    case '0-3-1':
      return hikingContent;

    case '0-3-2':
      return longboardingContent;

    case '0-3-3':
      return listeningToMusicContent;

    case '0-3-4':
      return videoGamesContent;

    case '0-3-5':
      return watchingMoviesContent;

    case '1':
      return aboutContent;

    default:
      return noContent;
  }
};