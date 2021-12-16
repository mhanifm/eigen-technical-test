export interface Data {
    status: string
    totalResults: number
    articles: Articles
}

export interface Articles {
    source: Source
    author: string
    title: string
    description: string
    url: string
    urlToImage: string
    publishedAt: string
    content: string
}

export interface Source {
    id: string | null
    name: string | null
}

export interface Search {
    searchText: any
}
