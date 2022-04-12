import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import useDarkMode from 'use-dark-mode';
import { DarkModeToggleButton, DarkModeToggleIcon, DarkModeToggleWrapper } from './styles';

export const DarkModeToggle = () => {
  const { toggle: toggleDarkMode, value: isDarkMode } = useDarkMode(true);

  return (
    <DarkModeToggleWrapper>
      <DarkModeToggleButton type="button" onClick={toggleDarkMode}>
        <DarkModeToggleIcon icon={isDarkMode ? faSun : faMoon} />
      </DarkModeToggleButton>
    </DarkModeToggleWrapper>
  )
}
