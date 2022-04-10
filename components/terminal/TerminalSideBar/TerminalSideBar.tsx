import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tree, { TreeProps } from "rc-tree";
import { TerminalSideBarContainer, TerminalSideBarText, TerminalSideBarTreeContainer } from "./styles";

export const TerminalSideBar = () => {
  return (
    <TerminalSideBarContainer>
      <TerminalSideBarText>Explorer</TerminalSideBarText>

      <TerminalSideBarTreeContainer>
        <Tree
          defaultExpandAll={false}
          defaultExpandedKeys={['0']}
          style={{ border: '1px solid #000' }}
          treeData={getTreeData()}
        />
      </TerminalSideBarTreeContainer>
    </TerminalSideBarContainer>
  );
};

const getTreeData = (): TreeProps['treeData'] => [
  {
    key: '0',
    title: 'MY INTERESTS',
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