import { navLinks } from '@/data/links';
import {
  Code,
  Collapse,
  createStyles,
  Group,
  Navbar,
  rem,
  ScrollArea,
  Stack,
  Text,
  UnstyledButton
} from '@mantine/core';
import clsx from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RetodoLogo } from '../header';

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -2)`,
    marginRight: `calc(${theme.spacing.md} * -2)`,
  },

  linksInner: {
    padding: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${theme.colors.gray[3]}`,
  },
}));
export const LinkGroup = ({
  link,
  active,
}: {
  link: {
    title: string;
    link: string;
    icon: string;
    sublinks?: { title: string; link: string; icon: string }[];
  };
  active?: boolean;
}) => {
  const [opened, setOpened] = useState(false);
  const hasLinks = link.sublinks && link.sublinks.length > 0;
   const router = useRouter();
const activeRoute = (_link: string | null) => router.pathname === _link;
  return (
    <>
      <UnstyledButton
        className="block w-full mb-1 rounded-none"
        onClick={() => {
          if (hasLinks) {
            setOpened((o) => !o);
          }
          if (link.link !== null) {
            router.push(link.link);
          }
        }}
        // component={Link}
        // href={link.link === null ? link?.sublinks[0]?.link : link.link}

      >
        <Group
          spacing={5}
          align="center"
          position="apart"
          className={clsx(
            'cursor-pointer hover:bg-violet-500 hover:text-white rounded-none px-3 py-2 text-gray-600',
            {
              'bg-violet-500 text-white': activeRoute(link.link) || (hasLinks && opened),
            }
          )}
        >
          <Group spacing={5}>
            {' '}
            <span className={link.icon} />
            <Text size="sm">{link.title}</Text>
          </Group>
          {hasLinks &&
              !opened ? (
                <span
                  className={clsx('ri-arrow-down-s-line text-gray-600', {
                    'text-white': activeRoute(link.link),
                  })}
                />
              ) : (
                <span
                  className={clsx('ri-arrow-up-s-line text-white', {
                    'text-white': active,
                  })}
                />
              )}

        </Group>
      </UnstyledButton>
      {hasLinks && (
        <Collapse
          in={opened}
          transitionDuration={200}
          className="border-r-2 w-full m-0 border-gray-300 mt-0"
        >
          <Stack
            spacing="xs"
            ml={30}
            className="border-l-2 border-r-0 rounded-none border-b-0 border-t-0 border-solid border-violet-500 p-0"
          >
            {link &&
              link?.sublinks?.map((sublink) => (
                <UnstyledButton
                  className={clsx(
                    'cursor-pointer hover:bg-violet-500 p-0 hover:text-white rounded-none -pl-3 py-2 text-gray-600',
                    {
                      'bg-violet-500 text-white': activeRoute(sublink.link),
                    }
                  )}
                  component={Link}
                  href={sublink.link
                  }
                >
                  <Text
                    ml={10}
                    className='flex items-center gap-1 before:content-[""] before:block before:bg-violet-500 before:h-0.5 before:w-4 '
                    size="sm"
                  >
                    {sublink.title}
                  </Text>
                </UnstyledButton>
              ))}
          </Stack>
        </Collapse>
      )}
    </>
  );
};

const links = navLinks.map((link) => <LinkGroup link={link as any} />);

export const DashboardNavbar = () => {
  const { classes } = useStyles();

  return (
    <Navbar width={{ sm: 250 }} p="md" className="pb-0 bg-white border-none">
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          <RetodoLogo size={20} />
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea} scrollHideDelay={0}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UnstyledButton
          className="hover:bg-red-500 hover:text-white  px-7 py-4 text-gray-600 w-full"
        >
          <Group>
            {' '}
            <span className="ri-logout-box-line" />
            <Text>Logout</Text>
          </Group>
        </UnstyledButton>
      </Navbar.Section>
    </Navbar>
  );
};
