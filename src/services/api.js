import axios from "axios";

const ACCESS_KEY = 'r-M2Ot83Y4mEP5HC2gXpz-OD-rW4ZoCXG-sfFLZTGlM';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.headers = {
    Authorization: `Client-ID ${ACCESS_KEY}`,
}
axios.defaults.params = {
    per_page: 15,
    orientation: 'landscape',
}

export const fetchData = async (query, page) => {
    const { data } = await axios.get(`/search/photos`, {
        params: {
            query,
            page,
        }
    });
    return data;
};