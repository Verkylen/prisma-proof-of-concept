export type JobEntity = {
    id: number;
    position: string;
    salary: number;
    summoned: boolean;
    company: string;
};

export type Job = Omit<JobEntity, 'id' | 'summoned'>;

export type PartialJobEntity = Partial<JobEntity>;