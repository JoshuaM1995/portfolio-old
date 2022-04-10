import React, { PropsWithChildren } from 'react'
import { TerminalTabContainer } from './styles'

export const TerminalTab = ({ children }: PropsWithChildren<{}>) => {
  return (
    <TerminalTabContainer>{children}</TerminalTabContainer>
  )
}
