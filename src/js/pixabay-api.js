import iconReject from '../img/Group_rej.png';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const API_KEY = '47392107-146a4706033000661fe0e92fb';

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
    document.querySelector('input').value = '';
  }
}
