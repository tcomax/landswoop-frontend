export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'commissions',
        data: {
          menu: {
            title: 'general.menu.earnings',
            icon: 'ion-cash',
            selected: false,
            expanded: false,
            order: 10,
          },
        },
      },
      {
        path: 'transactions',
        data: {
          menu: {
            title: 'general.menu.transactions',
            icon: 'ion-ios-list',
            selected: false,
            expanded: false,
            order: 10,
          },
        },
      },
      {
        path: 'portfolio',
        data: {
          menu: {
            title: 'general.menu.portfolio',
            icon: 'ion-ios-folder',
            selected: false,
            expanded: false,
            order: 10,
          },
        },
      },
      {
        path: 'lands',
        data: {
          menu: {
            title: 'general.menu.lands',
            icon: 'ion-ios-location',
            selected: false,
            expanded: false,
            order: 10,
          },
        },
      },
    ],
  },
];
