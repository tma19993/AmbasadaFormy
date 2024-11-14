export type TrainingModel = {
    name: string;
    description: string;
    exercises: string[],
    createdAt: Date,
    forDelete?: boolean
}