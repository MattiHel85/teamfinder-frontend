export interface User {
    id?: number;
    firstName: string,
    lastName: string,
    email: string;
    password: string;
    profilePicUrl: string;
    isAdmin: boolean;
  }

  export interface UserState {
    users: User[]
    loading: boolean
    error: string | null
}

export interface UserCardProps {
    user?: User | null
}

export interface UpdateUserProps {
  user?: User | null
  setUser?: (userData: User) => void; 
}