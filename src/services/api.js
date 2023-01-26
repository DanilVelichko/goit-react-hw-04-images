import axios from "axios";

const API_KEY = '32352574-5bc542a713dc09dea2d440a15';
const API_BASE = 'https://pixabay.com/api/?';

export const addFotoObj = async (searchInput, pageNum) => {
    const response = await axios.get(`${API_BASE}q=${searchInput}&page=${pageNum}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
   
    return response.data.hits;
}
