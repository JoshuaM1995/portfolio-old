import { Theme } from './theme';

export const codeStyle = (colors: Theme['colors']) => ({
  hljs: {
    display: 'block',
    overflowX: 'auto',
    padding: '0.5em',
    color: colors.terminal.code.text,
    backgroundColor: colors.terminal.background,
    marginBottom: 0,
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  'hljs-comment': {
    color: colors.terminal.code.comment,
    fontStyle: 'italic',
  },
});
