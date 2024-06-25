import { TeamMember } from "src/app/models/team-member.interface";

export const TeamMembers: TeamMember[] = [
    {
      name: 'Kiril Zafirov',
      description: 'Frontend Engineer/Architect Passionate about Angular, Web Components, and Web Performance.',
      image: '/kiril.webp',
      priority: true,
      height: 460,
      width: 460,
      socialMedia: [
        {
          icon: 'bi bi-linkedin', url: 'https://www.linkedin.com/in/kiril-z/'
        },
        {
          icon: 'bi bi-github', url: 'https://github.com/KirilZafirov'
        }
      ]
    },
    {
      name: 'Angel Petrushevski',
      priority: false,
      description: 'Full-Stack Developer @ Sorsix, Angular Educator & Front-End Specialist',
      image: '/angel.webp',
      height: 502,
      width: 450,
      socialMedia: [
        {
          icon: 'bi bi-linkedin', url: 'https://www.linkedin.com/in/petrusevski/'
        },
        {
          icon: 'bi bi-github', url: 'https://github.com/Angel-dev14'
        }
      ]
    },
    {
      name: 'Eva Conevski',
      description: 'Frontend Developer @ N47 | Angular Advocate',
      image: '/eva.webp',
      priority: false,
      height: 460,
      width: 460,
      socialMedia: [
        {
          icon: 'bi bi-linkedin', url: 'https://www.linkedin.com/in/eva-conevski-b212111a0/'
        },
        {
          icon: 'bi bi-github', url: 'https://github.com/Conevskie'
        }
      ]
    }
  ];