import { TeamMember } from "src/app/models/team-member.interface";

export const TeamMembers: TeamMember[] = [
    {
      name: 'Kiril Zafirov',
      description: 'Frontend Engineer/Architect Passionate about Angular, Web Components, and Web Performance.',
      image: '/kiril.webp',
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
      description: 'Full-Stack Developer @ Sorsix, Angular Educator & Front-End Specialist',
      image: '/angel.webp',
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
      description: 'Web Developer | Computer Science Graduate',
      image: '/eva.webp',
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