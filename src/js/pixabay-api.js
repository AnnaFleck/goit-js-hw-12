import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios, { Axios } from 'axios';

export let per_page = 15;

export async function fetchImages(query, currentPage = 1) {
  const URL = 'https://pixabay.com/api/';
  const KEY = '46309603-7d83d81f3414b6bb7a2d6c2e1'; //

  const params = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: per_page,
    page: currentPage,
  });

  try {
    const response = await axios.get(`${URL}?${params.toString()}`);
    const { hits, totalHits } = response.data;
    return { hits, totalHits };
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Failed to fetch images');
  }
}
