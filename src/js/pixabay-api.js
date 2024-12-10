import iconReject from '../img/Group_rej.png'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '47392107-146a4706033000661fe0e92fb';
// export const searchQuery = "";
// document.querySelector('.search-input').value.trim();

export async function fetchImages(searchQuery, page = 1) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`
    );
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Error while receiving images!',
      position: 'topRight',
      iconUrl: iconReject,
      backgroundColor: '#EF4040',
      messageColor: 'white',
      timeout: 3000,
    });
    // console.error(error.message);

    document.querySelector('input').value = '';
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.remove();
    }
  }
}





// export async function fetchImages( page = 1) {
//       const { data } = await axios.get(`${BASE_URL}`, {
//           params: {
//               key: API_KEY,
//               q: searchQuery,
//               image_type: 'photo',
//               orientation: 'horizontal',
//               safesearch: true,
//               per_page: 15,
//               page 
//           }
//       });
//       return data;
      // console.log(data);
  }
console.log(fetchImages());


// export function fetchImages(searchQuery) {
//   const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => {
//       iziToast.error({
//         message: 'Error while receiving images!',
//         position: 'topRight',
//         iconUrl: iconReject,
//         backgroundColor: '#EF4040',
//         messageColor: 'white',
//         timeout: 3000,
//       });
//       console.error(error);
//     });
// }


