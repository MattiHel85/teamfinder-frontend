export interface Team {
    id: number;
    badgeUrl: string;
    name: string;
    nickname: string;
    founded: number;
    groundName: string;
    groundCapacity: number;
    country: string;
    league: string;
    coach: string;
}

export interface TeamState {
    teams: Team[]
    loading: boolean
    error: string | null
}

export interface ApiResponse {
    teams: Team[]
}

export interface TeamProps {
    team: Team
}