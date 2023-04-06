import { AppShell, Box } from '@mantine/core';
import { DashboardHeader } from './dashboard-header';
import { DashboardNavbar } from './dashboard-navbar';

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      padding="md"
      navbar={<DashboardNavbar />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], padding: '0px' },
      })}
    >

      <Box ml={250}>
      <DashboardHeader />
      {children}
      </Box>
    </AppShell>
  );
}
