export const menuItems = [
  {
    title: 'Home',
    url: '/',
    className:'headerMenu'
  },
  {
    title: 'Services',
    url: '/services',
    className:'headerMenu',
    submenu: [
      {
        title: 'Paint Protection Film',
        submenu: [
          {
            title: 'Paint Protection Film Packages',
            url: '/services/paint-protection-film/paint-protection-film-packages'
          }
        ]
      },
      {
        title: 'Ceramic Coating',
        submenu: [
          {
            title: 'Ceramic Coating Packages',
            url: '/services/ceramic-coating/ceramic-coating-packages'
          }
        ]
      },
      {
        title: 'Window Tinting',
        url: '/services/window-tinting',
      },
      {
        title: 'Vynil Wrap Services',
        url: '/services/vynil-wrap-services',
      },
      {
        title: 'Detaling',
        submenu: [
          {
            title: 'Package Detaling',
            url: '/services/detaling/package-detaling'
          },
          {
            title: 'Exterior Detaling',
            url: '/services/detaling/exterior-detaling'
          },
          {
            title: 'Interior Detaling',
            url: '/services/detaling/interior-detaling'
          }
        ]
      },
      {
        title: 'Paintless Dent Repair ',
        url: '/services/paintless-dent-repair',
      },
      {
        title: 'Powder Coating ',
        url: '/services/powder-coating',
      },
    ],
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
    className:'headerMenu'
  },
  {
    title: 'Learn More',
    url: '/learn-more',
    className:'headerMenu'
  },
];