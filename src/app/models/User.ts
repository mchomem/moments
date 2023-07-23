export interface User {
    id?: number;
    fullName: string;
    login: string;
    password: string;
    active: boolean;
    created_at?: string;
    updated_at?: string;
    token: string;
}
