interface IEpisodio {
    id: number,
    name: string,
    air_date:string,
    episode: string,
    characters: Array<string>,
    url: string,
    created: string
}

export type { IEpisodio }