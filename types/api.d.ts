export namespace Api {
    export interface Experience {
        _id: string;
        jobTitle: string;
        companyName: string;
        duration: string;
        description: string;
        link: string;
        order: string;
    }

    export interface Education {
        schoolName: string;
        degree: string;
        gpa: string;
        startDate: Date;
        endDate: Date;
        order: number;
    }

    export interface StackIcon {
        name: string;
        label: string;
        description?: string;
    }

    export interface Stack {
        _id: string;
        frontend: StackIcon[];
        backend: StackIcon[];
        cloudAndDevops: StackIcon[];
        databases: StackIcon[];
    }

    export interface Project {
        _id: string;
        projectName: string;
        projectDescription: string;
        projectImageLink: string;
        stack: StackIcon[];
    }

    export interface ApiResponse<T> {
        success: boolean;
        data: T[];
        error?: string;
    }

    export interface ApiSingleResponse<T> {
        success: boolean;
        data: T;
        error?: string;
    }
}