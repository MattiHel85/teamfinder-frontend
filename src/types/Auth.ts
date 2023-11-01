export interface AuthState {
    isAuthenticated: boolean;
    accessToken: string |null;
    refreshToken: string | null;
    user: UserProfile | null,
    loading: boolean;
    error: string | null;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface UserProfile {
    id: number;
    firstName: string,
    lastName: string,
    email: string;
    password: string;
    role: string;
    profilePicUrl: string;
    isAdmin: boolean;
}