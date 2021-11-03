type Section = {
  title: string
  path: string
  icon: string
}

const sections: Section[] = [
  {
    title: 'Home',
    path: '/',
    icon: 'home',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'help',
  },
  {
    title: 'Knowledges',
    path: '/knowledges',
    icon: 'account_balance',
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: 'build',
  },
  {
    title: 'Social',
    path: '/social',
    icon: 'public',
  },
]

export default sections
