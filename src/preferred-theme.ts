export const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

export const preferredThemeId = 'preferred-color-scheme';