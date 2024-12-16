import { CompanyInformation } from "src/app/models/company-information.model";



export const JOB_OFFERS: CompanyInformation[] = [
  {
    name: 'Xessable',
    description: `We exist to find and connect driven talent with meaningful work.
We provide an environment designed for individuals that want to excel on their career path and work on a variety of projects in different industries.
Xessable addresses the global market gap for outsourcing by leveraging the local talent pool of exceptional professionals and matching them with the company's sector, technology, and corporate culture.`,
    logo: '',
    socialMedia: [{
      icon: '',
      url: 'https://www.xessable.com/careers/senior-angular-developer/'
    }],
    positions: [
      {
        title: 'Senior Angular Developer',
        description: `You will be part of the software development team that works on building a great product and see it in action, helping customers all over the world to have the best digital environment that fits their needs.`,
        responsibilities: [
          'Turn flat UI/UX designs into functional user interfaces in Angular; ',
          'Write high-quality, maintainable, and modular code and cover it with the unit and e2e tests',
          'Help lead in the architecture planning, bug fixing, and optimization of our APP;',
          'Collaborate closely with other team members, product owners, and customer success managers to gather feedback about newly developed features;',
          'Participate in daily stand-up, PR reviews, and retrospectives',
          'Part of an exciting, open, and agile team, where your voice matters and has a company-wide impact', 
        ],
        qualifications: [
          '7+ years of hands-on experience with front-end development;  ',
          'You have stellar knowledge of TypeScript, Angular, Angular Material, RxJS, and NgRx;',
          'You have excellent skills in HTML and strong Tailwind CSS capabilities with attention to design details',
          'You have a great vision of how to write scalable maintainable modular Angular apps;',
          'You have a great understanding of how good UI/UX should look',
          'You know how to utilize REST APIs; ',
          'You have experience with writing unit-test (Jest) and e2e-tests (Playwright);',
          'You are a self-organized developer, capable of moving forward and guiding others to success; ',
          'Experience with Nest.js would be a huge plus'
        ],
        niceToHave: [ 
        ]
      },
      {
        title: 'Senior Product Security Engineer',
        description: `We at Xessable believe in mutual work and collaboration across engineering combining individual expertise for problem-solving and creative thinking processes. We understand the latest technologies and build the best solutions for our clients.  

Seeking team members who care about results, are not afraid of taking ownership, and are eager to learn continuously.  

For one of our clients, we are currently looking for a Senior Product Security Engineer to join the team.  `,
        responsibilities: [
          'Implement security control that prevents misconfigurations of cloud resources, and security observability of best practices about cloud infrastructure',
          'Write efficient, maintainable, and testable code',
          'Leverage your knowledge to conduct reviews, threat modeling, and code reviews on applications and relevant supporting services and tools',
          'Implement security services, automation, and monitoring tools to protect our client services: ranging from CI pipelines and ending with security checks in production environments to production microservices that enforce security',
          'Create relevant documentation and metrics for your stakeholders and business leaders, and deliver these in a clear, concise manner',
          'Develop innovative and scalable tools, solutions, and processes to detect security threats and threats to data security',
          'Participate in security operations, responding to security incidents and providing security expertise for the customers and internal stakeholders'
        ],
        qualifications: [
          'At least 5 years of relevant experience in areas such as application security, offensive security, systems security, and/or incident response',
          'Strong debugging and problem-solving skills',
          'A clear understanding of the balance between security and user friction',
          'Understanding of security vulnerabilities, threat modeling, attacker exploit techniques, and methods for remediation;',
          'Experience with any paradigm of Infrastructure-as-Code (IaC), preferably Terraform ',
          'Knowledge of at least one programming language and scripting skills (C#/.Net)',
          'Experience with implementing security tools and practices in modern, cloud-native environments for customer-facing web-based applications.'
        ],
        niceToHave: [ 
        ]
      }, {
        title: 'Senior Software Developer .NET',
        description: `We at Xessable believe in mutual work and collaboration across engineering combining individual expertise for problem-solving and creative thinking processes. We understand the latest technologies and build the best solutions for our clients.  

Seeking team members who care about results, are not afraid of taking ownership, and are eager to learn continuously.  

For one of our clients, we are currently looking for a Senior Software Developer .NET to join the team.  The client is A cloud-based property management platform designed to manage multiple properties in the hospitality sector. The client’s platform provides an application programming interface (API) to find applications such as chatbots or mobile apps that enrich guest experience, improve hotel processes, and help configure and manage the hospitality chain. This enables hoteliers and hosts to manage their properties and rooms flexibly in the cloud. `,
        responsibilities: [
          'Implementing Core services for the platform in .NET 6+ that runs in Docker containers',
          'Developing features from DB to the APIs',
          'Ensuring the platform remains scalable and the codebase remains maintainable',
          'Proactively monitoring the services in production and spotting potential issues',
          'Care about the quality of produced code by covering it with unit and e2e tests',
          'You will be a part of an exciting, open, and agile team, where your voice matters and has a company-wide impact',
        ],
        qualifications: [
          'You bring at least 5 years of experience working in software engineering with relevant programming experience',
          'Proficient in .NET backend development, including technologies such as Kafka (or equivalents), AWS, Docker, ECS/Kubernetes, and PostgreSQL',
          'Nice to have: Experience applying Kafka for real-time processing, leveraging AWS/Docker for DevOps workflows, or performing PostgreSQL optimizations',
          'You know how to break down large epics into smaller issues;',
          'You worked with the concepts of IaaS/ PaaS/ SaaS',
          'You worked extensively with microservices-based architecture and used asynchronous message-based communication'
        ],
        niceToHave: [

        ]
      }, {
        title: 'Senior Site Reliability Engineer',
        description: `A cloud-based property management platform designed to manage multiple properties in the hospitality sector. The client’s platform provides an application programming interface (API) to find applications such as chatbots or mobile apps that enrich guest experience, improve hotel processes, and help configure and manage the hospitality chain. This enables hoteliers and hosts to manage their properties and rooms flexibly in the cloud`,
        responsibilities: [
          'Run the production environment by monitoring availability and taking a holistic view of system health',
          'Participating in the on-call rotations',
          'Measure and optimize system performance, as well as improve the monitoring system to push our capabilities forward to run the platform in a cloud environment at scale',
          'Improve reliability, quality, and time-to-market of our suite of software solutions by driving best practices for monitoring, alerting, and incident management company-wide',
          'Build software and systems to manage platform infrastructure and provide primary operational support to the infrastructure that underpins the client’s SaaS product',
          'Identify, respond to, and collaborate with the team to resolve production and customer issues and incidents',
          'Balance feature development speed and reliability with well-defined service-level objectives',
          'Gather and analyze metrics from operating systems as well as applications to assist in performance tuning and fault finding'
        ],
        qualifications: [
          'Over 5 years of experience as a Site Reliability Engineer, with a proven track record of tackling complex challenges and working with robust SaaS/PaaS products',
          'You regularly use at least one programming language and are ideally familiar with C# and .Net',
          'A proactive approach to identifying problems, performance bottlenecks, and areas for improvement',
          'Experience in running distributed systems built on top of Kafka, PostgreSQL, AWS S3, AWS SQS, AWS SNS',
          'Experience operating highly available distributed systems at scale, as well as building and deploying software in a SaaS environment',
          'Experience with technologies we use: Terraform, Docker (virtualization), ECS, Datadog, AWS',
          'Ability to analyze and troubleshoot complex issues related to cloud infrastructure',
          'Excellent communication skills with the ability to work independently and in a team'
        ],
        niceToHave: [

        ]
      }
    ]
  },

  {
    name: 'Intertec.io',
    description: `Intertec is a trusted custom software development and technology consulting company headquartered in Munich, Germany. 
    In nine years, we have grown to a company of 120 international employees, working with DAX and FTSE 100 companies, startups, and incubators (e.g. Rocket Internet). 
    Since our inception, we have pioneered custom solutions that have become central components in our client’s business success.
     Our vast technology and industry expertise help our clients across multiple business domains to deliver successful and scalable products. 
When joining Intertec, you enter an environment that inspires you to learn, grow, and lead by example. At Intertec, you can build a dynamic career in your field of interest,
work with professionals to gain industry insight and have exposure to international projects as well as enjoy on-going learning and development opportunities. 
Our team loves to have a good time, express their personality, and show it off to the world. Whether we’re celebrating a birthday, gathering for a team event, or celebrating a company’s success, 
we take pride in doing it with a smile. Life is too short not to have fun while you work. If you are passionate about driving technical innovation and leading teams to success, we’d love to hear from you!`,
    logo: '',
    socialMedia: [{
      icon: '',
      url: 'https://www.linkedin.com/jobs/view/4031939271/'
    }],
    positions: [
      {
        title: 'Senior Angular Developer',
        description: `We are seeking a highly skilled Senior Angular Developer to join our dynamic development team. As a Senior Developer, you will be responsible for designing and implementing top-tier web applications using Angular, ensuring high performance, scalability, and user experience. You will collaborate closely with cross-functional teams, lead junior developers, and participate in the entire software development lifecycle.`,
        responsibilities: [
          'Design, develop, and maintain scalable, responsive web applications using Angular (latest versions).',
          'Collaborate with UX/UI designers, product owners, and back-end developers to translate design mockups and prototypes into functional applications.',
          'Optimize applications for performance and scalability.',
          'Write clean, maintainable, and well-documented code adhering to industry best practices.',
          'Lead and mentor junior developers, providing guidance and feedback.',
          'Stay updated with the latest industry trends, Angular updates, and best practices to implement modern features.',
          'Participate in code reviews, ensuring high code quality and adherence to coding standards.',
          'Troubleshoot, debug, and upgrade existing applications when necessary.',
          'Contribute to all phases of the development lifecycle from design through to deployment.'
        ],
        qualifications: [
          'Bachelor’s degree in Computer Science, Engineering, or a related field.',
          '5+ years of professional experience as a front-end developer, with at least 3 years of hands-on experience using Angular (versions 9 and above).',
          'Proficiency in TypeScript, JavaScript, HTML5, CSS3, and RxJS.',
          'Strong understanding of RESTful APIs and experience integrating front-end applications with back-end services.',
          'Expertise in Angular CLI, components, services, directives, and dependency injection.',
          'Experience with front-end build tools such as Webpack, npm, or Yarn.',
          'Familiarity with CI/CD pipelines and automated testing frameworks.',
          'Strong problem-solving skills and ability to optimize for performance and scalability.',
          'Experience with version control systems, particularly Git.',
          'Excellent communication skills and the ability to work both independently and in a team environment.'
        ],
        niceToHave: [
          'Experience with cloud platforms like AWS, Azure, or Google Cloud.',
          'Familiarity with server-side rendering (Angular Universal).',
          'Knowledge of progressive web applications (PWAs).'
        ]
      },
      {
        title: 'Mid Angular Developer',
        description: `We are seeking a highly skilled Mid Angular Developer to join our dynamic development team. As a Mid Developer, you will be responsible for designing and implementing top-tier web applications using Angular, ensuring high performance, scalability, and user experience. You will collaborate closely with cross-functional teams, lead junior developers, and participate in the entire software development lifecycle.`,
        responsibilities: [
          'Design, develop, and maintain scalable, responsive web applications using Angular (latest versions).',
          'Collaborate with UX/UI designers, product owners, and back-end developers to translate design mockups and prototypes into functional applications.',
          'Optimize applications for performance and scalability.',
          'Write clean, maintainable, and well-documented code adhering to industry best practices.',
          'Lead and mentor junior developers, providing guidance and feedback.',
          'Stay updated with the latest industry trends, Angular updates, and best practices to implement modern features.',
          'Participate in code reviews, ensuring high code quality and adherence to coding standards.',
          'Troubleshoot, debug, and upgrade existing applications when necessary.',
          'Contribute to all phases of the development lifecycle from design through to deployment.'
        ],
        qualifications: [
          'Bachelor’s degree in Computer Science, Engineering, or a related field.',
          '5+ years of professional experience as a front-end developer, with at least 3 years of hands-on experience using Angular (versions 9 and above).',
          'Proficiency in TypeScript, JavaScript, HTML5, CSS3, and RxJS.',
          'Strong understanding of RESTful APIs and experience integrating front-end applications with back-end services.',
          'Expertise in Angular CLI, components, services, directives, and dependency injection.',
          'Experience with front-end build tools such as Webpack, npm, or Yarn.',
          'Familiarity with CI/CD pipelines and automated testing frameworks.',
          'Strong problem-solving skills and ability to optimize for performance and scalability.',
          'Experience with version control systems, particularly Git.',
          'Excellent communication skills and the ability to work both independently and in a team environment.'
        ],
        niceToHave: [
          'Experience with cloud platforms like AWS, Azure, or Google Cloud.',
          'Familiarity with server-side rendering (Angular Universal).',
          'Knowledge of progressive web applications (PWAs).'
        ]
      }, {
        title: 'Junior Angular Developer',
        description: `We are seeking a Junior Angular Developer to join our dynamic development team. As a Junior Developer, you will be responsible for designing and implementing top-tier web applications using Angular, ensuring high performance, scalability, and user experience. You will collaborate closely with cross-functional teams, and participate in the entire software development lifecycle.`,
        responsibilities: [
          'Design, develop, and maintain scalable, responsive web applications using Angular (latest versions).',
          'Optimize applications for performance and scalability.',
          'Write clean, maintainable, and well-documented code adhering to industry best practices.',
          'Troubleshoot, debug, and upgrade existing applications when necessary.',
        ],
        qualifications: [
          'Bachelor’s degree in Computer Science, Engineering, or a related field.',
          'Proficiency in TypeScript, JavaScript, HTML5, CSS3, and RxJS.',
          'Experience with front-end build tools such as Webpack, npm, or Yarn.',
          'Strong problem-solving skills and ability to optimize for performance and scalability.',
          'Experience with version control systems, particularly Git.',
          'Excellent communication skills and the ability to work both independently and in a team environment.'
        ],
        niceToHave: [

        ]
      }
    ]
  },
];