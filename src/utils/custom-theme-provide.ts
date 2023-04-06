import { MantineThemeOverride } from '@mantine/core';

export const customTheme: MantineThemeOverride = {
    colors: {
      violet: [
        '#f1e7ff',
        '#cfbbfa',
        '#ad8ff2',
        '#8d62eb',
        '#6c35e4',
        '#521bca',
        '#40149e',
        '#2e0e72',
        '#1a0846',
        '#0b011c',
      ],
    },
    primaryColor: 'violet',
    colorScheme: 'light',
    spacing: {
      xs: '0.5rem',
      sm: '0.875rem',
      md: '1.25rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '2.5rem',
    },
    shadows: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      xl: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    radius: {
      xs: '0.125rem',
      sm: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
    },
    activeStyles: {
      backgroundColor: 'violet.4',
    },
    fontFamily: 'Poppins, sans-serif',
    defaultRadius: 0,

    loader: 'dots',
    globalStyles(theme) {
      return {
        body: {
          // backgroundColor: theme.colors.violet[0],
          color: theme.colors.gray[9],
          backgroundColor: '#f1e7ff',
          backgroundAttachment: 'fixed',
        },
      };
    },
  };
