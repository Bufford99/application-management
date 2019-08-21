export interface IApplicant {
    id: string;
    name: string;
    position: string;
    applied: Date;
    experience: number;
    availability: any[];
    questions: string[];
}