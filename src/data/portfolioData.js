export const portfolio = {
  personal: {
    name: 'Ravneet Kaur',
    shortName: 'Ravneet',
    initials: 'RK',
    role: 'Full Stack Developer',
    headline: 'MERN Stack & PHP CodeIgniter Developer',
    intro:
      'I build clean, responsive and scalable web applications using React.js, JavaScript, Node.js, PHP CodeIgniter, MongoDB and MySQL.',
    location: 'Jalandhar, Punjab',
    email: 'ravneetkaur@example.com',
    github: 'https://github.com/Ravneet-project',
    linkedin: 'https://www.linkedin.com/in/ravneet-kaur-aa2b332a8',
  },

  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],

  stats: [
    { label: 'Skills', value: '14+' },
    { label: 'Projects', value: '4+' },
    { label: 'Experience', value: '2+' },
  ],

  cubeFaces: ['React', 'Node', 'JS', 'PHP', 'UI', 'API'],

  floatingCards: [
    { icon: 'bi-code-slash', text: 'Clean Code', className: 'card-one' },
    { icon: 'bi-lightning-charge', text: 'Fast UI', className: 'card-two' },
    { icon: 'bi-database', text: 'Full Stack', className: 'card-three' },
  ],

  about: {
    eyebrow: 'About Me',
    title: 'Professional Profile',
    description:
      'A Full Stack Developer focused on building modern, responsive and user-centered web applications across frontend and backend.',
    techStack: ['React', 'Node', 'PHP', 'MongoDB'],
    highlights: [
      {
        icon: 'bi-code-slash',
        title: 'Frontend Development',
        description:
          'Clean, responsive and interactive user interfaces using React.js, JavaScript, HTML5, CSS3 and Bootstrap.',
      },
      {
        icon: 'bi-server',
        title: 'Backend Development',
        description:
          'Secure backend systems using Node.js, Express.js, PHP CodeIgniter and REST APIs.',
      },
      {
        icon: 'bi-database',
        title: 'Database Management',
        description:
          'Efficient database structures using MongoDB and MySQL for modern web applications.',
      },
      {
        icon: 'bi-palette',
        title: 'UI/UX & Web Design',
        description:
          'Modern layouts, smooth user experience, responsive design and professional presentation.',
      },
    ],
  },

  skills: [
    { name: 'React.js', icon: 'bi-react', level: 90, category: 'Frontend' },
    { name: 'JavaScript', icon: 'bi-filetype-js', level: 88, category: 'Frontend' },
    { name: 'HTML5', icon: 'bi-filetype-html', level: 95, category: 'Frontend' },
    { name: 'CSS3', icon: 'bi-filetype-css', level: 92, category: 'Frontend' },
    { name: 'Bootstrap', icon: 'bi-bootstrap', level: 90, category: 'Frontend' },
    { name: 'Node.js', icon: 'bi-hdd-network', level: 78, category: 'Backend' },
    { name: 'Express.js', icon: 'bi-diagram-3', level: 75, category: 'Backend' },
    { name: 'PHP', icon: 'bi-filetype-php', level: 85, category: 'Backend' },
    { name: 'CodeIgniter', icon: 'bi-fire', level: 82, category: 'Backend' },
    { name: 'MongoDB', icon: 'bi-database-check', level: 78, category: 'Database' },
    { name: 'MySQL', icon: 'bi-database', level: 86, category: 'Database' },
    { name: 'REST APIs', icon: 'bi-cloud-arrow-up', level: 84, category: 'Tools' },
    { name: 'Git', icon: 'bi-git', level: 80, category: 'Tools' },
    { name: 'Responsive Design', icon: 'bi-phone', level: 92, category: 'Tools' },
  ],

  projectCategories: ['All', 'MERN', 'PHP', 'Frontend'],

  projects: [
    {
      title: 'Academic Complaints Project',
      category: 'MERN',
      icon: 'bi-mortarboard',
      description:
        'A centralized portal to register, track and resolve academic complaints with status updates.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'ShopSphere',
      category: 'MERN',
      icon: 'bi-bag-check',
      description:
        'An e-commerce web app with product listings, cart flow and smooth user experience.',
      techStack: ['React.js', 'JavaScript', 'Bootstrap', 'Node.js', 'MySQL'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'SmartBookmark',
      category: 'PHP',
      icon: 'bi-bookmark-star',
      description:
        'A smart bookmarking tool to organize, search and manage saved links by categories.',
      techStack: ['PHP CodeIgniter', 'MySQL', 'REST APIs', 'Responsive Design'],
      liveDemo: '#',
      github: '#',
    },
    {
      title: 'FeedOne',
      category: 'Frontend',
      icon: 'bi-layout-text-window-reverse',
      description:
        'A social-feed style platform for sharing updates with responsive UI and API integration.',
      techStack: ['React.js', 'Express.js', 'MongoDB', 'API Integration'],
      liveDemo: '#',
      github: '#',
    },
  ],

  experiences: [
    {
      title: 'Assistant Web Developer & Web Designer',
      company: 'MakeStudy',
      period: 'Current',
      description:
        'Worked on responsive web pages, UI improvements and modern design implementation for educational web solutions.',
    },
    {
      title: 'MERN Stack Developer Intern',
      company: 'DC Infotech',
      period: 'Internship',
      description:
        'Built and integrated full stack features using MongoDB, Express, React and Node.js with API-driven workflows.',
    },
  ],

  contactCards: [
    { icon: 'bi-geo-alt', title: 'Location', value: 'Jalandhar, Punjab' },
    {
      icon: 'bi-linkedin',
      title: 'LinkedIn',
      value: 'ravneet-kaur-aa2b332a8',
      href: 'https://www.linkedin.com/in/ravneet-kaur-aa2b332a8',
    },
    {
      icon: 'bi-github',
      title: 'GitHub',
      value: 'Ravneet-project',
      href: 'https://github.com/Ravneet-project',
    },
  ],
}

export const navLinks = portfolio.navLinks
export const contactCards = portfolio.contactCards
export const experiences = portfolio.experiences
export const projects = portfolio.projects
export const skills = portfolio.skills
