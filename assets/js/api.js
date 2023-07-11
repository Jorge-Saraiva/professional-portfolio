
async function getGithubProfileInfos() {
    const url = "https://raw.githubusercontent.com/Jorge-Saraiva/professional-portfolio/main/profile.json";

    const promise = await fetch(url)

    return await promise.json()
}
