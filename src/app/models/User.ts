export interface User {
    id?: number;
    login: string;
    password: string;
    active: boolean;
    created_at?: string;
    updated_at?: string;
    token: string;
}
