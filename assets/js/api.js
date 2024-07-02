
/*consumo da api usada requisição http de get*/
async function fetchProfileData () {
    const url = 'https://raw.githubusercontent.com/Marcosgt1111/js-developer-portfolio/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}