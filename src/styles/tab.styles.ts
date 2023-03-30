import { createStyles } from "@mantine/core";
const useTabStyles = createStyles((theme) => ({
  tabsList: {
    gap: theme.spacing.md,
  },
  tab: {
    padding: theme.spacing.md,
    fontWeight: "bold",
    color: theme.colors.gray[6],
  },
  tabLabel: {},
  root: {},
  panel: {
    padding: theme.spacing.md,
    height: "100%",
  },
}));
export { useTabStyles };
