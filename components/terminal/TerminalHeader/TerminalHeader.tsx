import { PropsWithChildren } from 'react'
import { TerminalHeaderContainer } from './styles'

export const TerminalHeader = ({ children }: PropsWithChildren<{}>) => {
  return (
    <TerminalHeaderContainer>{children}</TerminalHeaderContainer>
  )
}
