export interface TeamMember {
    name: string;
    description: string;
    image: string;
    socialMedia?: {
      icon: string;
      url: string;
    }[];
  }