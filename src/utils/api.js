export const fetchMedia = (genre, skip) => {
    return fetch(
        `/api/media?genre=${genre}&skip=${skip}`
    ).then(response => response.json());
}
