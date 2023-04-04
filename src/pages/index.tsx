import { HeaderAction, HEADER_HEIGHT } from "@/components/header";
import BG from "@/public/bg.svg";
import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Header,
  Image,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import Hero from "@/public/hero.svg";
import TeamUp from "@/public/teamup.svg";
import Reminder from "@/public/reminder.svg";
import Multitasking from "@/public/multitasking.svg";
import Screen from "@/public/screen.svg";
import Analytic from "@/public/landing-analytics.svg";

const IndexPage = () => {
  const theme = useMantineTheme();
  const styles = (color: string) => ({
    backgroundColor: color,
    display: "flex",
    alignItems: "center",
    width: "364px",
    height: "476px",
    borderRadius: "11px",
  });
  return (
    <div
      style={{
        backgroundColor: "#ffffff11",
      }}
    >
      <HeaderAction />

      <Container>
        <Box py={rem(80)}>
          <Flex gap="xl" align="center">
            <Stack spacing="md">
              <Text fz={30} fw={800}>
                Task management and lists Tool
              </Text>
              <Text size={20}>
                Retodo is a task management and lists tool that helps you
                organize your work and life.
              </Text>

              <Group>
                <TextInput
                  placeholder="Organization or Individual email.."
                  size="lg"
                />
                <Button color="violet.4" size="lg">
                  Get Started
                </Button>
              </Group>
            </Stack>
            <Image src={Hero.src} width={533} alt="illustration" />
          </Flex>
        </Box>

        <Box py={rem(80)}>
          <Text align="center" size={30} weight={800} py={20}>
            Featured services that help you get things done
          </Text>
          <Flex justify="center" gap="lg">
            <Paper sx={styles("#525ffb")}>
              <Stack align="center">
                <Image src={Multitasking.src} width={160} alt="image" />
                <Text align="center" size="lg" weight={800}>
                  Keep tasks in one place
                </Text>
                <Text align="center" size="sm">
                  Save time, avoid losing work and information, delegate, and
                  track tasks to stay on schedule
                </Text>
              </Stack>
            </Paper>
            <Paper sx={{ ...styles("#e9f0ff"), marginTop: "80px" }}>
              <Stack align="center">
                <Image src={Reminder.src} width={160} alt="image" />
                <Text align="center" size="lg" weight={800}>
                  Keep tasks in one place
                </Text>
                <Text align="center" size="sm">
                  Save time, avoid losing work and information, delegate, and
                  track tasks to stay on schedule
                </Text>
              </Stack>
            </Paper>
            <Paper sx={styles("#ffe7aa")}>
              <Stack align="center">
                <Image src={TeamUp.src} width={160} alt="image" />
                <Text align="center" size="lg" weight={800}>
                  Keep tasks in one place
                </Text>
                <Text align="center" size="sm">
                  Save time, avoid losing work and information, delegate, and
                  track tasks to stay on schedule
                </Text>
              </Stack>
            </Paper>
          </Flex>
        </Box>

        <Box py={rem(80)}>
          <Flex gap="xl" align="center">
            {" "}
            <Image src={Screen.src} width={433} alt="illustration" />
            <Stack spacing="md">
              <Text fz={30} fw={800}>
                Why do you need task management software?
              </Text>
              <Text size={20}>
                Do you waste time organizing sticky notes, searching your email
                and apps for to-dos, and figuring out what to work on first?
                Then you need one solution to prioritize your tasks, manage your
                time, and meet your deadlines.
              </Text>

              <div>
                {" "}
                <Button color="violet.4" size="lg">
                  Learn more
                </Button>
              </div>
            </Stack>
          </Flex>
        </Box>
        <Box py={rem(80)}>
          <Flex gap="xl" align="space-between">
            <Stack spacing="md">
              <Text fz={30} fw={800}>
                Seamless Team Workflow & Efficient Task Management{" "}
              </Text>

              <Text size={20}>
                Do you waste time organizing sticky notes, searching your email
                and apps for to-dos, and figuring out what to work on first?
                Then you need one solution to prioritize your tasks, manage your
                time, and meet your deadlines.
              </Text>

              <div>
                {" "}
                <Button color="violet.4" size="lg">
                  Learn more
                </Button>
              </div>
            </Stack>
            <Image src={Analytic.src} width={433} alt="illustration" />
          </Flex>
        </Box>
        <Box py={rem(80)}>
          <Flex gap="xl" justify="center">
            <Stack align="center">
              {" "}
              <Text fz={30} fw={800}>
                Get better work done
              </Text>
              <Text size={20}>
                See why millions of people across 195 countries use Dash.
              </Text>
              <Group>
                <TextInput
                  placeholder="Organization or Individual email.."
                  size="lg"
                />
                <Button color="violet.4" size="lg">
                  Get Started
                </Button>
              </Group>
            </Stack>
          </Flex>
        </Box>
      </Container>
    </div>
  );
};

export default IndexPage;
