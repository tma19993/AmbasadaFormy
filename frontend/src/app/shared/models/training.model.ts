export type TrainingModel = {
  title: string;
  description: string;
  exercises: string[];
  createdAt: Date;
  forDelete?: boolean;
  active: boolean;
  disabled: boolean
};
