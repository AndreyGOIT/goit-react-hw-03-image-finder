import axios from 'axios';

export async function fetchImages(query, page) {
  const params = {
    q: query,
    page: page,
    key: '30800169-3713389dad872250f057e0e33',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  };

  const response = await axios.get('https://pixabay.com/api/', { params });
  return response.data;
}
