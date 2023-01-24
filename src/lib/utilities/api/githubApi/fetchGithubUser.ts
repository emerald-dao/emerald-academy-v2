export const fetchGithubUser = async (username:string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.headers.get('content-type')?.includes('application/json')) {
        const json = await response.json();
        return { response, json };
    } else {
        return { response };
    }
};