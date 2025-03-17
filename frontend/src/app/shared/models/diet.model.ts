export type DietModel = {
  title: string;
  subtitle: string;
  description: string;
  createdAt: Date;
  forDelete?: boolean;
  active?: boolean;
  disabled?: boolean
};
