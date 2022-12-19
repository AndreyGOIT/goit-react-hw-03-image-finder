import axios from 'axios';

export async function fetchImages(query, page) {
  const params = {
    query: query,
    page: page,
    key: '30800169-3713389dad872250f057e0e33',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  };
  // console.log(params);

  const response = await axios.get('https://pixabay.com/api/', { params });
  if (!response) {
    throw new Error(response.status);
  }
  return response;
}
