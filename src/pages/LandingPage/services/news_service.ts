import { fetchApiRequest } from '../../../utils/api_request_util';

interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: Articles[];
};

export interface Articles {
    title: string;
    description: string;
    author: string;
    urlToImage: string;
    url: string;
    publishedAt: string;
    content: string;
};

export async function fetchNews(query?: string): Promise<Articles[]> {
    console.log(process.env.NEWS_API_KEY);
    const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`;
    const options = {
        method: 'GET',
    };
    const response = await fetchApiRequest<NewsApiResponse>(url, options);
    return response.articles;
}