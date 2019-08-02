export interface IApplicant {
    id: number;
    name: string;
    position: string;
    applied: Date;
    experience: number;
    availability: any[];
    questions: string[];
}