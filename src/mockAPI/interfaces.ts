export interface ITrack {
  displayName: string;
  category: string;
  description: string;
  milestones: IMilestone[];
  userLevel: number;
}

export interface IMilestone {
  summary: string;
  signals: string[];
  examples: string[];
}

export interface IUser {
  name: string;
  points: number;
  rank: string;
  nextLevelPoints: number;
}

//TODO IProgressBar, key are categories (it depends on unique categories in ITrack[]) values are count onMount.

export interface IProgressBar {}
