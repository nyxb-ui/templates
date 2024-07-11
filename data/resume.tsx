import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
import { Icons } from '../components/icons'

export const DATA = {
   name: 'Nyxb',
   initials: 'DV',
   url: 'https://nyxb.nexus',
   location: 'Miami, FL',
   locationLink: 'https://www.google.com/maps/place/miami',
   description:
    'Fanatical open sourcerer, educator, indie hacker, and a dedicated white hat hacker',
   summary:
    'I am the Co-Founder and CTO of [Joypix](https://joypix.io). \n\n'
    + 'Creator of [Nyxb UI](https://nyxbui.design), [Conventional Emoji Commits](https://conventional-emoji-commits.site) and [others](https://nyxb.nexus/projects).\n\n'
    + 'Dreaming up ideas and nurturing them to reality, especially in the realm of education, is where my passion lies.\n\n'
    + 'Outside of programming, I have a diverse set of hobbies that include:\n'
    + '- Traveling with my wife and kids\n'
    + '- Shooting with handguns at my local club\n'
    + '- Practicing archery\n\n'
    + 'If you happen to be in the same city I reside in (currently Hamburg), perhaps we could meet up. We could:\n'
    + '- Share a coffee\n'
    + '- Discuss coding\n'
    + '- Plan a day at the shooting range or archery field\n\n'
    + 'It\'s always great to connect with like-minded individuals and share our passions.',
   avatarUrl: '/me.png',
   skills: [
      'React',
      'Next.js',
      'Typescript',
      'Node.js',
      'Python',
      'Postgres',
      'Docker',
      'Kubernetes',
      'Rust',
      'C++',
   ],
   navbar: [
      { href: '/', icon: HomeIcon, label: 'Home' },
      { href: '/blog', icon: NotebookIcon, label: 'Blog' },
      { href: '#projects', icon: CodeIcon, label: 'Projects' },
      { href: '#contact', icon: PencilLine, label: 'Contact' },
   ],
   contact: {
      email: 'hello@example.com',
      tel: '+301456789',
      social: {
         GitHub: {
            name: 'GitHub',
            url: 'https://nyxb.link/github',
            icon: Icons.github,

            navbar: true,
         },
         LinkedIn: {
            name: 'LinkedIn',
            url: 'https://nyxb.link/linkedin',
            icon: Icons.linkedin,

            navbar: true,
         },
         X: {
            name: 'X',
            url: 'https://nyxb.link/x',
            icon: Icons.x,

            navbar: true,
         },
         Youtube: {
            name: 'Youtube',
            url: 'https://nyxb.link/yt',
            icon: Icons.youtube,
            navbar: true,
         },
         email: {
            name: 'Send Email',
            url: '#',
            icon: Icons.email,

            navbar: false,
         },
      },
   },

   work: [
      {
         company: 'Nyxb Digital Solutions',
         href: 'https://nyxb.nexus',
         badges: [],
         location: 'Remote',
         title: 'Full Stack Developer',
         logoUrl: '/me.png',
         start: 'Mar 2013',
         end: 'Jun 2022',
         description:
        'Specialized in developing dynamic web applications with Vue, Nuxt, React, and Next. Also experienced in creating cross-platform mobile apps with React Native and desktop applications with Tauri. Active in the open-source community, contributing to various projects.',
      },
   ],
   education: [
      {
         school: 'Extensive Online Coursework',
         href: 'https://www.udacity.com/?promo=year_end&coupon=JULY4&utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=12907755074_c_individuals&utm_term=124133496400&utm_keyword=udacity_e&gad_source=1',
         degree: '',
         logoUrl: '/udacity.png',
         start: '2012',
         end: '2023',
      },
      {
         school: 'Abitur - University Entrance Qualification',
         href: 'https://en.wikipedia.org/wiki/Hamburg',
         degree: 'German High School Diploma (Abitur) from Hamburg',
         logoUrl: '/abitur.png',
         start: '2012',
         end: '2013',
      },
   ],
   projects: [
      {
         title: 'Conventional Emoji Commits',
         href: 'https://conventional-emoji-commits.site',
         dates: 'Oct 2023 - Present',
         active: true,
         description:
        'A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈',
         technologies: [
            'git',
            'emoji',
            'commit',
            'conventional',
            'nuxt',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://conventional-emoji-commits.site',
               icon: <Icons.smile className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/conventional-emoji-commits/conventional-emoji-commits.site',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video:
        'https://cdn.nyxbui.design/conventional-emoji-commits.mp4',
      },
      {
         title: 'Nyxb UI',
         href: 'https://magicui.design',
         dates: 'June 2023 - Present',
         active: true,
         description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
         technologies: [
            'Next.js',
            'Typescript',
            'TailwindCSS',
            'Nyxb UI',
         ],
         links: [
            {
               type: 'Website',
               href: 'https://nyxbui.design',
               icon: <Icons.globe className="size-3" />,
            },
            {
               type: 'Source',
               href: 'https://github.com/magicuidesign/magicui',
               icon: <Icons.github className="size-3" />,
            },
         ],
         image: '',
         video: 'https://cdn.nyxbui.design/bento-grid.mp4',
      },
      {
         title: 'More Projects',
         href: 'https://nyxb.nexus/projects',
         dates: '',
         active: true,
         description:
        'Explore many more projects here.',
         technologies: [],
         links: [
            {
               type: 'Website',
               href: 'https://nyxb.nexus/projects',
               icon: <Icons.globe className="size-3" />,
            },
         ],
         image: '',
         video: 'https://cdn.nyxbui.design/more-projects.mp4',
      },
   ],
   hackingEvents: [
      {
         title: 'HackerOne Live Hacking Event',
         dates: 'June 14th - 16th, 2022',
         location: 'Las Vegas, Nevada',
         description:
        'Participated in a live hacking event, uncovering security vulnerabilities in various web applications.',
         image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
         links: [
            {
               title: 'Event Details',
               icon: <Icons.globe className="size-4" />,
               href: 'https://www.hackerone.com/resources/hackerone/live-hacking-event-invitations-2022-guide',
            },
         ],
      },
      {
         title: 'Bugcrowd LevelUp',
         dates: 'April 10th, 2021',
         location: 'Online',
         description:
        'Participated in a virtual event focused on enhancing the skills of bug bounty hunters.',
         image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEX////959/60MDxUgDxWgD5w6/yZx/yaCLxXgD3sJXxYAjyYQ/3poj+8+70gE7zeEDxWQD96+T1kGfyYxX1lnH0hFX72Mz3qIv70cPzczfyaiX5v6r+9/T/+vf4tJv2nXr0iV32nn1FGKDsAAAA5UlEQVR4AbWRR4KFIAxAY0uwR5mx1/tfcoRvGHT/3448IA2+TODxdmEUO6LkJRHJgerp0ozw3+eF78qYsKrqXCw3nmw1xQDwo2+pf8HRMZHqAHr3NB5AGE22qISCmRUaiZO4WdnLl0yWtavt39kGllXhLVcw1HI07DnJqeVqhc5+pFsrDy1yjkkVALGVlTR5y13b2IReq2kmBeX2t+wxJMSPbCIVddDERJitIsP4I6GZAzCfk/IWU+lLrmAjqXk4+ptmE6j1tO9kMnIHHmd+WSTUGqVHQaYkcAkPZlYO3uBF6AHf5Q/1ow5yOIAYvAAAAABJRU5ErkJggg==',
         links: [
            {
               title: 'Event Details',
               icon: <Icons.globe className="size-4" />,
               href: 'https://www.bugcrowd.com/blog/how-to-succeed-in-bug-bounties-as-a-pentester/',
            },
         ],
      },
      {
         title: 'HackerOne h@cktivitycon',
         dates: 'September 14th - 16th, 2021',
         location: 'Online',
         description:
        'Participated in a virtual conference for the hacker community, uncovering various security vulnerabilities in web applications.',
         image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
         links: [
            {
               title: 'Event Details',
               icon: <Icons.globe className="size-4" />,
               href: 'https://www.hackerone.com/hackerone-community-blog/get-invited-how-live-hacking-event-invites-have-changed',
            },
         ],
      },
      {
         title: 'Bugcrowd Bug Bash',
         dates: 'March 23rd - 24th, 2021',
         location: 'San Francisco, California',
         description:
        'Participated in a Bug Bash event, uncovering security vulnerabilities in various applications.',
         image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEX////959/60MDxUgDxWgD5w6/yZx/yaCLxXgD3sJXxYAjyYQ/3poj+8+70gE7zeEDxWQD96+T1kGfyYxX1lnH0hFX72Mz3qIv70cPzczfyaiX5v6r+9/T/+vf4tJv2nXr0iV32nn1FGKDsAAAA5UlEQVR4AbWRR4KFIAxAY0uwR5mx1/tfcoRvGHT/3448IA2+TODxdmEUO6LkJRHJgerp0ozw3+eF78qYsKrqXCw3nmw1xQDwo2+pf8HRMZHqAHr3NB5AGE22qISCmRUaiZO4WdnLl0yWtavt39kGllXhLVcw1HI07DnJqeVqhc5+pFsrDy1yjkkVALGVlTR5y13b2IReq2kmBeX2t+wxJMSPbCIVddDERJitIsP4I6GZAzCfk/IWU+lLrmAjqXk4+ptmE6j1tO9kMnIHHmd+WSTUGqVHQaYkcAkPZlYO3uBF6AHf5Q/1ow5yOIAYvAAAAABJRU5ErkJggg==',
         links: [
            {
               title: 'Event Details',
               icon: <Icons.globe className="size-4" />,
               href: 'https://www.bugcrowd.com/blog/how-to-succeed-in-bug-bounties-as-a-pentester/',
            },
         ],
      },
      {
         title: 'HackerOne h1-702',
         dates: 'August 3rd - 5th, 2020',
         location: 'Las Vegas, Nevada',
         description:
        'Participated in one of the largest live hacking events, uncovering security vulnerabilities in various web applications.',
         image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEwHBwcDAwMAAAAAAAAAAAB6enoXFxcAAAAAAAAAAAAAAAABAQETExPBwcEiIiKdnZ1DQ0NYWFjS0tL39/f///9JSUnFxcXFxcX///8JH38iAAAAGnRSTlMAlfLQSv8HlylrPzWs+y7qeuW1WQ4zep2JBO1Yg5cAAABnSURBVHgB3Yy1AcAwDARN5zDz/oOGm4AW8DWCB3WjjXVKAtBeFomCE+MkSQXRJxbMv5jlBuBXTAoQRJUaZLGsoKqk2rppu1YS+27otSTu+ChosaEYr200NC+xm+by2sp56tSLZfluG3lXBtEeABadAAAAAElFTkSuQmCC',
         links: [
            {
               title: 'Event Details',
               icon: <Icons.globe className="size-4" />,
               href: 'https://www.hackerone.com/resources/hackerone/live-hacking-event-invitations-2022-guide',
            },
         ],
      },
   ],
} as const
