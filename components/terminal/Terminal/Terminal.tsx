import { PropsWithChildren } from 'react'
import { TerminalContainer } from './styles'

export const Terminal = ({ children }: PropsWithChildren<{}>) => {
  return (
    <TerminalContainer>{children}</TerminalContainer>
  );
}
