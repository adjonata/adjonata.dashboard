type Section = {
  title: string
  path: string
  icon: string
  color: string
}

const sections: Section[] = [
  {
    title: 'Home',
    path: '/',
    icon: 'home',
    color: '#eb521e',
  },
  {
    title: 'About',
    path: '/about',
    icon: 'help',
    color: '#bf642c',
  },
  {
    title: 'Knowledges',
    path: '/knowledges',
    icon: 'account_balance',
    color: '#2cbf76',
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: 'build',
    color: '#8539b8',
  },
  {
    title: 'Social',
    path: '/social',
    icon: 'public',
    color: '#3976b8',
  },
]

export default sections
