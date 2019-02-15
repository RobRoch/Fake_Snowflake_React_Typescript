export interface ISkill {
  displayName: string;
  category: string;
  description: string;
  milestones: IMilestone[];
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
export interface ITrack extends ISkill {
  userLevel: number;
}
export interface ICurrentTrack extends IMilestone {
  userLevel: number;
}

export interface IProgressBar {}
