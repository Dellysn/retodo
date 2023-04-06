export const mockedOverview = {
    user: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      avatar: '/images/avatar.jpg',
    },
    overview: {
      activeProjects: 4,
      tasksCompletedThisWeek: 12,
      upcomingDeadlines: [
        {
          title: 'Website Redesign',
          dueDate: '2023-05-01',
        },
        {
          title: 'Client Proposal',
          dueDate: '2023-04-15',
        },
        {
          title: 'Project Budget Review',
          dueDate: '2023-04-20',
        },
      ],
    },
    recentActivity: {
      projectUpdates: [
        {
          project: 'Website Redesign',
          update: 'New homepage design has been approved.',
        },
        {
          project: 'Marketing Campaign',
          update: 'New landing page has been published.',
        },
      ],
      taskUpdates: [
        {
          task: 'Write Blog Post',
          update: "Task status changed to 'In Progress'.",
        },
        {
          task: 'Create Social Media Graphics',
          update: 'New comment added by team member.',
        },
      ],
      notifications: [
        {
          title: 'New Message',
          message: 'You have a new message from Jane Doe.',
        },
        {
          title: 'Task Reminder',
          message: "Task 'Website Redesign Mockups' is due tomorrow.",
        },
      ],
    },
    quickLinks: [
      {
        title: 'Projects',
        icon: 'folder',
        url: '/projects',
      },
      {
        title: 'Tasks',
        icon: 'check-circle',
        url: '/tasks',
      },
      {
        title: 'Profile',
        icon: 'user',
        url: '/profile',
      },
    ],
    helpLinks: [
      {
        title: 'Documentation',
        url: '/docs',
      },
      {
        title: 'Contact Support',
        url: '/support',
      },
    ],
  };
