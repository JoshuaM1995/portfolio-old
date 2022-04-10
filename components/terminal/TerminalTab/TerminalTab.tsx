import React, { PropsWithChildren } from 'react'
import { TerminalTabContainer } from './styles'

interface TerminalTabProps {
  isSelected?: boolean;
};

export const TerminalTab = ({ isSelected, children }: PropsWithChildren<TerminalTabProps>) => {
  return (
    <TerminalTabContainer isSelected={isSelected}>{children}</TerminalTabContainer>
  )
}
