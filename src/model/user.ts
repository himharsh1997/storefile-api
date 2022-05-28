export interface User {
    _id?: string;
    user_id: string;
    is_email_verified: boolean;
    email: string;
    name: string;
    phone_no: string;
    created_at?: string
    updated_at?: string;
}

export interface UserSignupBody {
    email: string,
    name: string,
    password: string,
    phone_no: string
}

export interface UserSiginBody {
    email: string
    password: string
}