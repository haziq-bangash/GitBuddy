// get username state from store
export const getUserData = (user) => {
    return fetch(`https://api.github.com/users/${user}`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

export const getUserRepos = (user) => {
    return fetch(`https://api.github.com/users/${user}/repos`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

export const getUserFollowers = (user) => {
    return fetch(`https://api.github.com/users/${user}/followers`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

export const getUserFollowing = (user) => {
    return fetch(`https://api.github.com/users/${user}/following`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

export const getUserStarred = (user) => {
    return fetch(`https://api.github.com/users/${user}/starred`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

export const getUserOrgs = (user) => {
    return fetch(`https://api.github.com/users/${user}/orgs`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

export const getUserGists = (user) => {
    return fetch(`https://api.github.com/users/${user}/gists`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}

// get forked repos of a user
export const getUserForks = (user) => {
    return fetch(`https://api.github.com/users/${user}/repos?type=forks`)
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}
