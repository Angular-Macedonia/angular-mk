export interface Collaborator {
  name: string;
  description: string;
  image: string;
  socialMedia?: {
    icon: string;
    url: string;
  }[];
}
