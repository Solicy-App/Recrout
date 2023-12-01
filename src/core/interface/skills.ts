import { ITranslate } from "./translate";

interface ISkills {
    skills: ISkillsData[]
}

export interface ISkillsData {
    title: string;
}

export interface ISkillsTab extends ITranslate,ISkills {}

