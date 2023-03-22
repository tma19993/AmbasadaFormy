export interface examplePersonalTrainerModel {
    id: number,
    name?: string,
    age?: string,
    trainerSkills?: trainerSkillsModel,
    maxClients?: number,
}

enum trainerSkillsModel {
    "high" = 3,
    "medium" = 2,
    "low" = 1 
}