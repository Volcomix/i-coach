export interface Exercise {
  name: string
  prepareDuration: number
  workDuration: number
}

export enum IntervalType {
  Prepare,
  Work,
}
