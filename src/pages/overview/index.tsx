import { DashboardLayout } from '@/components/layout/dashboard-layout';
import { mockedOverview } from '@/data/mock-data';
import { Box, Button, Flex, Group, Paper, SimpleGrid, Space, Stack, Text, UnstyledButton } from '@mantine/core';

const ProfilePage = () => (
<DashboardLayout>
<Box p="sm" className="flex flex-col gap-5">

 <Box mt="md">
    <Paper
      shadow="sm"
      p="md"
      style={{
        backgroundColor: '#DFDBE5',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'80\' height=\'80\' viewBox=\'0 0 80 80\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.4\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z\'/%3E%3C/g%3E%3C/svg%3E")',
    }}
    >
    <Text>
Welcome back to your
<Text weight="bolder" fz="xl">Daily task manager, {mockedOverview.user.name}!</Text>
    </Text>
  <Button mt="md">
    Start Hacking!
  </Button>
    </Paper>

{/* overview */}

 </Box>

<SimpleGrid cols={2} spacing="md">
<Stack spacing="sm">
  <Text weight="bolder" fz="xl">Overview</Text>
  <Flex gap="md">
  <Paper p="sm" px="xl" className="w-full">
    <Stack spacing={5} align="center">
      <Text className="text-4xl" weight="bolder">
       {mockedOverview.overview.activeProjects}
      </Text>
      <div className="text-center">
        <Text size="sm" weight="bold">Active</Text>
        <Text size="xs">Projects</Text>
      </div>

    </Stack>
  </Paper>
  <Paper p="sm" px="xl" className="w-full">
    <Stack spacing={5} align="center">
      <Text className="text-4xl text-center" weight="bolder">
       {mockedOverview.overview.tasksCompletedThisWeek}
      </Text>
      <div className="text-center">
        <Text size="sm" weight="bold">Completed</Text>
        <Text size="xs">
          Tasks this week
        </Text>
      </div>

    </Stack>
  </Paper>
  <Paper p="sm" px="xl" className="w-full">
    <Stack spacing={5} align="center">
      <Text className="text-4xl" weight="bolder">
       {mockedOverview.overview.activeProjects}
      </Text>
      <div className="text-center">
        <Text size="sm" weight="bold">Active</Text>
        <Text size="xs">Projects</Text>
      </div>

    </Stack>
  </Paper>
  </Flex>
</Stack>

 <Stack>
  <Box>
    <Text weight="bolder" fz="xl">Upcoming Deadlines</Text>
     <Box mt="sm">
      <Paper p="sm" px="xl" className="flex items-center justify-between ">
        <Group>
          <Text className="text-4xl" weight="bolder">
            {mockedOverview.overview.upcomingDeadlines.length}
          </Text>
          <div>
            <Text size="sm" weight="bold">Tasks</Text>
            <Text size="xs">Due in the next 7 days</Text>
          </div>
        </Group>
        <UnstyledButton className="text-right
        text-gray-500 hover:text-gray-700 focus:text-gray-700
        focus:outline-none
        transition ease-in-out duration-150 w-8 h-8 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 rounded-full flex items-center justify-center
        "
        >
          <span className="ri-more-2-line block" />
        </UnstyledButton>
      </Paper>

     </Box>
  <Box mt="md">
    <Text weight="bolder" fz="xl">
      Recent Activity
    </Text>
     <Box mt="xs">
      <Paper p="sm" px="xl" className="flex items-center justify-between ">
        <Group>
          <Text className="text-4xl" weight="bolder">
            {mockedOverview.recentActivity.projectUpdates.length}
          </Text>
          <div>
            <Text size="sm" weight="bold">
              Project Updates
            </Text>
            <Text size="xs">
              Updates on your projects
            </Text>
          </div>
        </Group>
        <UnstyledButton className="text-right
        text-gray-500 hover:text-gray-700 focus:text-gray-700
        focus:outline-none
        transition ease-in-out duration-150 w-8 h-8 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 rounded-full flex items-center justify-center
        "
        >
          <span className="ri-more-2-line block" />
        </UnstyledButton>
      </Paper>
      <Space h={10} />
      <Paper p="sm" px="xl" className="flex items-center justify-between ">
        <Group>
          <Text className="text-4xl" weight="bolder">
            {mockedOverview.recentActivity.taskUpdates.length}
          </Text>
          <div>
            <Text size="sm" weight="bold">
          Task Updates
            </Text>
            <Text size="xs">
              Updates on your projects
            </Text>
          </div>
        </Group>
        <UnstyledButton className="text-right
        text-gray-500 hover:text-gray-700 focus:text-gray-700
        focus:outline-none
        transition ease-in-out duration-150 w-8 h-8 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 rounded-full flex items-center justify-center
        "
        >
          <span className="ri-more-2-line block" />
        </UnstyledButton>
      </Paper>
     </Box>
  </Box>

  </Box>
 </Stack>
</SimpleGrid>

</Box>
</DashboardLayout>
  );

export default ProfilePage;
