import { mockedOverview } from '@/data/mock-data';
import { Avatar, Box, Divider, Flex, Group, Paper, Popover, Stack, Text, TextInput, UnstyledButton } from '@mantine/core';

export const DashboardHeader = () => (
  <Paper p="sm" className="relative">
    <Flex justify="space-between">
      <Group>
        <TextInput
          placeholder="Search"
          icon={<span className="ri-search-line  text-gray-500" />}
        />
      </Group>
      <div>
        <Group noWrap>
            <Group noWrap>
            <Popover withArrow>
              <Popover.Target>
              <UnstyledButton>
            <span className="ri-notification-3-line text-gray-500" />
              </UnstyledButton>
              </Popover.Target>
              <Popover.Dropdown>
                <Paper p="sm" className="w-96 border-violet-500 border" withBorder={false}>
                  <Text weight="bolder" fz="md">Notifications</Text>
                  <Stack spacing="sm" mt="sm">

        {
          mockedOverview.recentActivity.notifications.map((notification) => (
            <Box
              p="sm"
              className="flex items-center justify-between
            hover:bg-gray-100 focus:bg-gray-100
            "
            >
              <Group>
                <Text className="text-md" weight="bolder">
                  {notification.title}
                </Text>
                <div>
                  <Text size="sm" weight="bold">{notification.message}</Text>
                  <Text size="xs">12 mins ago</Text>
                </div>
              </Group>
              <UnstyledButton className="text-right
              text-gray-500 hover:text-gray-700 focus:text-gray-700
              focus:outline-none focus:ring-2 focus:ring-gray-300
              focus:ring-offset-2 focus:ring-offset-gray-100
              transition ease-in-out duration-150
              "
              >
                <span className="ri-more-2-line" />
              </UnstyledButton>
            </Box>
          ))

        }
                  </Stack>
                </Paper>
              </Popover.Dropdown>
            </Popover>
            <UnstyledButton>
             <span className="ri-moon-line text-gray-500" />
            </UnstyledButton>
            </Group>
            <Divider orientation="vertical" />
              <Popover withinPortal={false}>
                <Popover.Target>
                <UnstyledButton>
            <Group noWrap spacing={5}>
                <Text size="sm"> Lukman Isiaka </Text>
                <Group spacing={2}>
                <Avatar radius="xl" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
                <span className="ri-arrow-down-s-line text-gray-500" />
                </Group>
            </Group>
                </UnstyledButton>
                </Popover.Target>
                <Popover.Dropdown>
                  {/*  Account Details*/}
                  <Paper shadow="sm" className="w">
                    <Text size="sm" weight={500} className="p-3">
                      Account Details
                    </Text>
                  <Stack spacing="xs">
                    <UnstyledButton className="w-full text-left p-3">
                      <Group spacing={5}>
                        <span className="ri-user-3-line text-gray-500" />
                        <Text size="sm">Profile</Text>
                      </Group>
                    </UnstyledButton>
                    <UnstyledButton className="w-full text-left p-3">
                      <Group spacing={5}>
                        <span className="ri-settings-3-line text-gray-500" />
                        <Text size="sm">Settings</Text>
                      </Group>
                    </UnstyledButton>
                    <UnstyledButton className="w-full text-left p-3 hover:bg-red-500 hover:text-white">
                      <Group spacing={5}>
                        <span className="ri-logout-box-r-line" />
                        <Text size="sm">Logout</Text>
                      </Group>
                    </UnstyledButton>
                  </Stack>
                  </Paper>

                </Popover.Dropdown>
              </Popover>
        </Group>
      </div>
    </Flex>
  </Paper>
);
