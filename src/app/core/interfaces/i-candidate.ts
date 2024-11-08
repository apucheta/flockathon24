export interface ICandidate {
  id: number;
  name: string;
  matchPercentage: number;
  tag: "FrontEnd" | "Backend" | "FullStack";
  changes?: number
}
