export interface CompanyInformation {
  name: string;
  description: string;
  logo: string;
  socialMedia?: {
    icon: string;
    url: string;
  }[];
  positions: {
    title: string;
    description: string;
    responsibilities: string[];
    qualifications: string[]; 
    niceToHave: string[];
  }[
    
  ]
}