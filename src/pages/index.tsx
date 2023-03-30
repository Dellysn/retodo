import {
  Box,
  Button,
  Center,
  Container,
  createStyles,
  Flex,
  Group,
  Loader,
  Paper,
  Radio,
  ScrollArea,
  SimpleGrid,
  Space,
  Stack,
  Tabs,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useTabStyles } from "../styles/tab.styles";
import { Calendar, CalendarDays, Eye, User } from "lucide-react";

export default function IndexPage() {
  const { classes: tabClasses } = useTabStyles();
  const todoTabs = ["notifications", "todos"];
  return (
    <Container size="sm">
      <Box className="min-h-screen bg-white relative ">
        <Box className=" ">
          <Paper>
            <Tabs defaultValue={todoTabs[1]} classNames={tabClasses}>
              <Tabs.List>
                <Tabs.Tab value={todoTabs[0]}>Notifications</Tabs.Tab>
                <Tabs.Tab value={todoTabs[1]}>Todos</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value={todoTabs[0]}>
                <Box sx={{ height: "100%" }}>
                  {" "}
                  <h1>Notifications</h1>
                </Box>
              </Tabs.Panel>
              <Tabs.Panel value={todoTabs[1]}>
                <ScrollArea.Autosize mah={500} color="violet.4">
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />

                  <Space h={70} />
                </ScrollArea.Autosize>
              </Tabs.Panel>
            </Tabs>
          </Paper>
        </Box>
        <Paper
          shadow="xl"
          p="md"
          radius="md"
          className="absolute  w-full bottom-0 h-[10rem]  scale-x-105"
          sx={{
            scale: "1.05",
          }}
        >
          <TextInput placeholder="Task name here..." variant="unstyled" />
          <Textarea placeholder="Description..." variant="unstyled" />
          <Flex justify="space-between">
            <Group noWrap>
              <Button
                variant="outline"
                color="gray.7"
                leftIcon={<CalendarDays className="w-4" />}
                size="xs"
              >
                Due Date
              </Button>
              <Button
                variant="outline"
                color="gray.7"
                leftIcon={<User className="w-4" />}
                size="xs"
              >
                Assign To
              </Button>
            </Group>
            <Group noWrap>
              <Button
                variant="outline"
                color="gray.7"
                leftIcon={<CalendarDays className="w-4" />}
                size="xs"
              >
                Cancel
              </Button>
              <Button color="violet" size="xs">
                Add Task
              </Button>
            </Group>
          </Flex>
        </Paper>
      </Box>
    </Container>
  );
}

function TodoItem() {
  // const { classes, theme } = useStyles();
  return (
    <Box>
      <Group noWrap align="start">
        <Radio
          styles={({}) => ({
            label: {
              alignItems: "start",
            },
          })}
          label={
            <Stack spacing={4}>
              <Text fz="sm" fw="bold">
                Complete main UI components
              </Text>
              <Text color="gray" size="xs">
                Would be good if we include every componet in design system..
              </Text>
              <Group>
                <Button
                  leftIcon={<Calendar className="w-3" />}
                  variant="link"
                  color="gray"
                  size="xs"
                  px={0}
                >
                  6 Apr 2022
                </Button>
                <Button
                  leftIcon={<User className="w-3" />}
                  variant="link"
                  color="gray"
                  size="xs"
                  px={0}
                >
                  Esther Howard
                </Button>
              </Group>
            </Stack>
          }
        />
      </Group>
    </Box>
  );
}
