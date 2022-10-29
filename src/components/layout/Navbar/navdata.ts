interface LinkProps {
  id: number;
  title: string;
  href: string;
}

export const links: LinkProps[] = [
  {
    id: 1,
    title: 'HOME',
    href: '/',
  },
  {
    id: 2,
    title: 'ABOUT US',
    href: '#about',
  },
  {
    id: 3,
    title: 'PORTFOLIO',
    href: '/portfolio',
  },
  {
    id: 4,
    title: 'TESTIMONIAL',
    href: '/testimonial',
  },
  {
    id: 5,
    title: 'CONTACT',
    href: '/contact',
  },
];