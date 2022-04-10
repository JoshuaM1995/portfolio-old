import React from 'react'
import useDarkMode from 'use-dark-mode';
import { DarkModeToggleButton, DarkModeToggleWrapper } from './styles';

export const DarkModeToggle = () => {
  const { toggle: toggleDarkMode } = useDarkMode(true);

  return (
    <DarkModeToggleWrapper>
      <DarkModeToggleButton type="button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </DarkModeToggleButton>
    </DarkModeToggleWrapper>
  )
}
