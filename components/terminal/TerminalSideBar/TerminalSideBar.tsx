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
import { useTheme } from "styled-components";
import { TerminalSideBarContainer, TerminalSideBarText, TerminalSideBarTreeContainer, treeStyle } from "./styles";

export const TerminalSideBar = () => {
  const [, setAboutContext] = useContext(AboutContext);
  const { colors: { terminal: { sidebar: { tree: { icon: treeIconColor } } } } } = useTheme();

  const getTreeData = (): TreeProps['treeData'] => [
    {
      key: '0',
      title: 'MY INTERESTS',
      icon: <FontAwesomeIcon icon={faFolder} color={treeIconColor.folder} />,
      selectable: false,
      children: [
        {
          key: '0-1',
          title: 'Free Time',
          icon: <FontAwesomeIcon icon={faFolder} color={treeIconColor.folder} />,
          selectable: false,
          children: [
            { key: '0-1-1', title: 'hiking.md', icon: <FontAwesomeIcon icon={faMarkdown} color={treeIconColor.markdown} /> },
            { key: '0-1-2', title: 'longboarding.md', icon: <FontAwesomeIcon icon={faMarkdown} color={treeIconColor.markdown} /> },
            { key: '0-1-3', title: 'listening_to_music.md', icon: <FontAwesomeIcon icon={faMarkdown} color={treeIconColor.markdown} /> },
            { key: '0-1-4', title: 'video_games.md', icon: <FontAwesomeIcon icon={faMarkdown} color={treeIconColor.markdown} /> },
            { key: '0-1-5', title: 'watching_movies.md', icon: <FontAwesomeIcon icon={faMarkdown} color={treeIconColor.markdown} /> },
          ]
        },
        {
          key: '0-2',
          title: 'Programming',
          icon: <FontAwesomeIcon icon={faFolder} color={treeIconColor.folder} />,
          selectable: false,
          children: [
            { key: '0-2-1', title: 'laravel.php', icon: <FontAwesomeIcon icon={faLaravel} color={treeIconColor.laravel} /> },
            { key: '0-2-2', title: 'node.js', icon: <FontAwesomeIcon icon={faNodeJs} color={treeIconColor.nodeJS} /> },
            { key: '0-2-3', title: 'React.jsx', icon: <FontAwesomeIcon icon={faReact} color={treeIconColor.react} /> },
          ]
        }
      ],
    },
    {
      key: '1',
      title: 'about_me.md',
      icon: <FontAwesomeIcon icon={faMarkdown} color={treeIconColor.markdown} />,
    },
  ];

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

const getContentByKey = (key: string) => {
  switch (key) {
    case '0-1-1':
      return hikingContent;

    case '0-1-2':
      return longboardingContent;

    case '0-1-3':
      return listeningToMusicContent;

    case '0-1-4':
      return videoGamesContent;

    case '0-1-5':
      return watchingMoviesContent;

    case '0-2-1':
      return laravelContent;

    case '0-2-2':
      return nodeContent;

    case '0-2-3':
      return reactContent;

    case '1':
      return aboutContent;

    default:
      return noContent;
  }
};