import { DashboardLayout } from '@/components/layout/dashboard-layout';
import {
  Avatar,
  Badge,
  Box,
  Button,
  clsx,
  Divider,
  Flex,
  Group,
  Paper,
  Stack,
  Tabs,
  Text,
  UnstyledButton
} from '@mantine/core';
import dayjs from 'dayjs';
import { useState } from 'react';

const ProjectList = () => {
  const [activeTab, setActiveTab] = useState('todo');
  const tabs = [
    { value: 'todo', label: 'Todo', pill: '2' },
    { value: 'in-progress', label: 'In Progress', pill: '2' },
    { value: 'completed', label: 'Completed', pill: '2' },
  ];
  return (
    <Box p="lg">
      <Flex justify="space-between">
        <div>
          <Text size="xl" weight="bolder">
            Project List
          </Text>
          <Text size="sm" color="gray">
            here is a list of all your projects
          </Text>
        </div>
        <Group>
          <Group>
            <Avatar.Group>
              <Avatar
                radius={100}
                src="https://avatars0.githubusercontent.com/u/2059356?s=460&v=4"
              />
              <Avatar
                radius={100}
                src="https://avatars0.githubusercontent.com/u/2059356?s=460&v=4"
              />
              <Avatar
                radius={100}
                src="https://avatars0.githubusercontent.com/u/2059356?s=460&v=4"
              />
              <Avatar
                radius={100}
                src="https://avatars0.githubusercontent.com/u/2059356?s=460&v=4"
              />
              <Avatar radius={100}>+5</Avatar>
            </Avatar.Group>
            <UnstyledButton className=" hover:bg-gray-100 rounded-full p-2 border-dashed border-2 border-gray-200">
              <span className="ri-add-line text-gray-500 font-bold inline-block" />
            </UnstyledButton>
          </Group>
          <Divider orientation="vertical" />
          <Button>Export to CSV</Button>
        </Group>
      </Flex>

      <Tabs defaultValue={activeTab} mt="md">
          <Tabs.List
            className={clsx('flex gap-0 flex-nowrap justify-between bg-white border-none w-full', {
              'border-b border-gray-300': true,
            })}
          >
            <Flex justify="space-between " className="bg-white rounded-sm">
            {tabs.map((tab) => (
              <Tabs.Tab
                key={tab.value}
                value={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={clsx(
                  'flex gap-2 items-center h-full  p-5 border-none hover:bg-violet-100  active:bg-violet-400 transition-all',
                  {
                    'bg-violet-400 hover:bg-violet-400': activeTab === tab.value,
                  }
                )}
              >
                <Group spacing={4}>
                  <Text size="sm" weight="bold">
                    {tab.label}
                  </Text>

                  <Badge radius={0} variant="filled">
                    {' '}
                    {tab.pill}{' '}
                  </Badge>
                </Group>
              </Tabs.Tab>
            ))}
            </Flex>
            <Group>
            <Button
              leftIcon={
                <span className="ri-equalizer-line font-bold inline-block" />
              }
              variant="outline"
            >
              Filter
            </Button>
            <Button
              leftIcon={<span className="ri-add-line font-bold inline-block" />}
              variant="outline"
            >
              Add New
            </Button>
            </Group>

          </Tabs.List>

        <Tabs.Panel value="todo" mt="sm">
          <Paper
            shadow="md"
            className="
              w-[15rem] px-4 py-4  rounded-sm
             "
          >
            <Group position="apart">
              <Badge>Web Design</Badge>

              <UnstyledButton className=" hover:bg-gray-100">
                <span className="ri-more-fill text-gray-500 font-bold inline-block" />
              </UnstyledButton>
            </Group>

            <Stack spacing="xs" mt="sm" className="w-full">
              <Text size="sm" weight="bold">
                Project Name
              </Text>
              <Text size="xs" color="gray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quod.
              </Text>
            </Stack>

            <Box className="border-t border border-gray-500 mt-4 pt-4">
              <Group position="apart">
               <Avatar.Group>
              <Avatar size="sm" radius={100} src="https://avatars0.githubusercontent.com/u/2059356?s=460&v=4" />
              <Avatar size="sm" radius={100} src="https://avatars0.githubusercontent.com/u/2059356?s=460&v=4" />
              <Avatar size="sm" radius={100} src="https://avatars0.githubusercontent.com/u/2059356?s=460&v=4" />
               </Avatar.Group>

               <div className="flex gap-2 items-center">
                <span className="ri-calendar-todo font-bold inline-block" />
                <Text size="xs" weight="normal">
                  {dayjs().format('DD MMM YYYY')}
                </Text>
               </div>

              </Group>

            </Box>
          </Paper>
        </Tabs.Panel>
        <Tabs.Panel value="in-progress" mt="sm">
          he
        </Tabs.Panel>
        <Tabs.Panel value="completed" mt="sm">
          he
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};

export default ProjectList;
ProjectList.PageLayout = DashboardLayout;
