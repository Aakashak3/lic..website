export interface Policy {
  id: string;
  title: string;
  description: string;
  term: string;
  maturity: string;
  isHidden: boolean;
  image?: string;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  url?: string;
}

export interface Submission {
  id: string;
  policyName: string;
  userName: string;
  phone: string;
  policyType: string;
  term: string;
  beneficiary: 'child' | 'parent';
  goal: string;
  timestamp: string;
}
