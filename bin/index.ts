import * as unirest from "unirest"

interface authRequest {
    username: string,
    password: string,
    client_id: string,
    client_secret: string,
    resource: string,
    commonAuthority: string
    grant_type?: string
}

export default async function getTokenAsync(authreq: authRequest) {
    return new Promise<string>((resolve, reject) => {
        console.log("retreiving access token.....");
        var req = unirest("POST", authreq.commonAuthority);

        req.headers({
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded"
        });
        delete authreq.commonAuthority;

        if(!authreq.grant_type)
            authreq.grant_type = 'password';
        
        req.form(authreq);

        req.end((res) => {
            if (res.error) {
                reject(res.error)
                return;
            }

            try {                
                resolve(res.body.access_token);
                console.log("Access token reteived");
            } catch (e) { reject(e) }
        });

    });
}