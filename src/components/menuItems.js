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
        url: '/services/paint-protection-film/paint-protection-film-packages',
      },
      {
        title: 'Ceramic Coating',
        url: '/services/ceramic-coating/ceramic-coating-packages',
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
          },
          {
            title: 'Fleet Detaling',
            url: '/services/detaling/fleet-detaling'
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
    title: 'About Us',
    url: '/about-us',
    className:'headerMenu'
  },
];