import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tree, { TreeProps } from "rc-tree";
import { TerminalSideBarContainer, TerminalSideBarText, TerminalSideBarTreeContainer, treeStyle } from "./styles";

export const TerminalSideBar = () => {
  return (
    <TerminalSideBarContainer>
      <TerminalSideBarText>Explorer</TerminalSideBarText>

      <TerminalSideBarTreeContainer>
        <Tree
          treeData={getTreeData()}
          defaultExpandAll={false}
          defaultExpandedKeys={['0']}
          defaultSelectedKeys={['1']}
          style={treeStyle}
          onSelect={(selected) => {
            console.log('selected', selected);
          }}
        />
      </TerminalSideBarTreeContainer>
    </TerminalSideBarContainer>
  );
};

const getTreeData = (): TreeProps['treeData'] => [
  {
    key: '0',
    title: 'MY INTERESTS',
    icon: <FontAwesomeIcon icon={faFolder} />,
    children: [
      { key: '0-0', title: 'React', icon: <FontAwesomeIcon icon={faReact} color="#61DAFB" /> },
    ],
  },
  {
    key: '1',
    title: 'About Me',
    icon: <FontAwesomeIcon icon={faFileAlt} color="#61DAFB" />,
  },
];