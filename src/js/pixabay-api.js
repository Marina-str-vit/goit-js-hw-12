import iconReject from '../img/Group_rej.png'
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = "47392107-146a4706033000661fe0e92fb";

export function fetchImages(searchQuery) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
  return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(error => {
      iziToast.error({
        message: 'Error while receiving images!',
        position: 'topRight',
        iconUrl: iconReject,
        backgroundColor: '#EF4040',
        messageColor: 'white',
        timeout: 3000,
      });
      console.error(error);
    });
}


