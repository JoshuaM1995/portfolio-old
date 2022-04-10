import React, { PropsWithChildren } from 'react'
import { TerminalTabsContainer } from './styles'

export const TerminalTabs = ({ children }: PropsWithChildren<{}>) => {
  return (
    <TerminalTabsContainer>{children}</TerminalTabsContainer>
  )
}
