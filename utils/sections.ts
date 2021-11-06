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
    title: 'Projects',
    path: '/projects',
    icon: 'build',
  },
  {
    title: 'Knowledges',
    path: '/knowledges',
    icon: 'account_balance',
  },
  {
    title: 'Social',
    path: '/social',
    icon: 'public',
  },
]

export default sections
