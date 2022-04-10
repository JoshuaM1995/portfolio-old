import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { PropsWithChildren } from 'react'
import { TerminalTabContainer } from './styles'

interface TerminalTabProps {
  link: string;
};

export const TerminalTab = ({ link, children }: PropsWithChildren<TerminalTabProps>) => {
  const { route } = useRouter();

  return (
    <Link href={link} passHref>
      <TerminalTabContainer role="tab" isSelected={link === route}>{children}</TerminalTabContainer>
    </Link>
  )
}
