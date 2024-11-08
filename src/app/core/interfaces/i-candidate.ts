export interface ICandidate {
  id: number;
  name: string;
  matchPercentage: number;
  tag: "FrontEnd" | "Backend" | "FullStack";
  experience: any;
  skills: any[];
  changes?: number
}
