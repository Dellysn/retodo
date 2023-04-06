import { Anchor, Burger, Button, Container, createStyles, Group, Header, rem, Text, Title, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
// import { MantineLogo } from "@mantine/ds";

export const HEADER_HEIGHT = rem(60);
export const RetodoLogo = ({ size }: { size: number }) => {
  const theme = useMantineTheme();
  return (
    <Title size={size} color="violet" weight="bolder">
    <Anchor href="/">
       <Group spacing={5} align="center"> <span className={`ri-anchor-line w-[${size}] h-[${size}] text-[${theme.colors.violet[4]}]`} />
        <Text span color="violet.4">Retodo</Text>
       </Group>
    </Anchor>
    </Title>
  );
};

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

export function HeaderAction() {
  const { classes } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Header
      height={HEADER_HEIGHT}
      sx={{ borderBottom: 0, backgroundColor: 'transparent' }}
      mb={20}
      // fixed
    >
      <Container className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
          <RetodoLogo size={28} />
        </Group>
        {/* <Group spacing={5} className={classes.links}>
          {items}
        </Group> */}
      <Group>
      <Link href="/login">
          Login
      </Link>
        <Button h={40}>Get Started</Button>
      </Group>
      </Container>
    </Header>
  );
}
