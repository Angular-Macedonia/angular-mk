export interface TeamMember {
    name: string;
    description: string;
    priority: boolean;
    height?: number;
    width?: number;
    image: string;
    socialMedia?: {
      icon: string;
      url: string;
    }[];
  }
