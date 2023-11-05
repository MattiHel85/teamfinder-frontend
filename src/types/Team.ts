export interface Team {
    _id?: string;
    badgeUrl: string;
    name: string;
    nickname: string;
    founded: number | null;
    groundName: string;
    groundCapacity: number | null;
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

export interface UpdateTeamProps {
    team: Team
}