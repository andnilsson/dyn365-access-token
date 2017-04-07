export interface authRequest {
    username: string,
    password: string,
    client_id: string,
    client_secret: string,
    resource: string,
    commonAuthority: string
    grant_type?: string
}

export default function getTokenAsync(params:authRequest): Promise<string>;
