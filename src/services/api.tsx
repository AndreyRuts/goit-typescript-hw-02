import axios from "axios";


const ACCESS_KEY = 'r-M2Ot83Y4mEP5HC2gXpz-OD-rW4ZoCXG-sfFLZTGlM';
axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;
axios.defaults.params = {
    per_page: 15,
    orientation: 'landscape',
}


export interface IImage{
    id: string;
    alt_description: string;
    urls: {
        regular: string;
        small: string;
    };
    user: {
        name: string;
    };
    likes: number;
};

interface IResponse{
    total: number;
    total_pages: number;
    results: IImage[];
}

export const fetchData = async (query:string, page:number):Promise<IResponse> => {
    const { data } = await axios.get<IResponse>(`/search/photos`, {
        params: {
            query,
            page,
        }
    });
    return data;
};

// перед финишем проверить реальное использование user/likes и тп
