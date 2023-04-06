export const navLinks = [
  { title: 'Dashboard', icon: 'ri-dashboard-line', link: '/overview' },
  {
    title: 'Projects',
    icon: 'ri-folder-line',
    link: null,
    sublinks: [
      { title: 'Project List', link: '/project/all' },
    //   { title: 'Create New project', link: '/project/create' },
      { title: 'Overview', link: '/project/overview' },
    ],
  },
  {
    title: 'Tasks',
    icon: 'ri-task-line',
    link: null,
    sublinks: [
      { title: 'Task List', link: '/tasks/all' },
    //   { title: 'Create New task', link: '/tasks/create' },
      { title: 'Overview', link: '/tasks/overview' },
    ],
  },
  { title: 'Calendar', icon: 'ri-calendar-line', link: '/calender' },
  {
    title: 'Notes',
    icon: 'ri-sticky-note-line',
    link: null,
    sublinks: [
      { title: 'Note List', link: '/notes/all' },
    //   { title: 'Create New note', link: '/notes/create' },
      { title: 'Overview', link: '/notes/overview' },
    ],
  },
  { title: 'Settings', icon: 'ri-settings-3-line', link: '/settings' },
];
