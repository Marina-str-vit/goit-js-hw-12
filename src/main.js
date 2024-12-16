import { fetchImages } from './js/pixabay-api';
import {
  renderSearchForm,
  renderImageGallery,
  renderLoadMoreButton,
  renderLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iconReject from './img/Group_rej.png';

const main = document.querySelector('main');

const searchForm = renderSearchForm();
main.appendChild(searchForm);

const gallery = document.createElement('div');
gallery.classList.add('gallery');
main.appendChild(gallery);

const loadMoreButton = renderLoadMoreButton();
main.appendChild(loadMoreButton);
loadMoreButton.style.display = 'none';

const loader = renderLoader();
main.appendChild(loader);
loader.style.display = 'none';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
});

let currentPage = 1;
let searchQueryGlobal = '';
const imagesPerPage = 15;

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  loader.style.display = 'block';
  const searchQuery = document.querySelector('#search-input').value.trim();
  if (searchQuery === '') {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      titleColor: 'white',
      message: 'Please enter your search query!',
      position: 'topRight',
      iconUrl: iconReject,
      backgroundColor: '#EF4040',
      messageColor: 'white',
      timeout: 3000,
    });
    return;
  }

  currentPage = 1;
  gallery.innerHTML = '';
  loadMoreButton.style.display = 'none';
  loadMoreButton.disabled = true;
  searchQueryGlobal = searchQuery;
  const images = await fetchImages(searchQuery, currentPage);
  const imageGallery = renderImageGallery(images.hits);
  imageGallery.forEach(imageCard => {
    gallery.appendChild(imageCard);
    lightbox.refresh();
  });

  const loaderSpinner = document.querySelector('.loader');

  if (images.hits.length === 0) {
    iziToast.error({
      title: 'No results',
      titleColor: 'white',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      iconUrl: iconReject,
      backgroundColor: '#EF4040',
      messageColor: 'white',
      timeout: 3000,
    });
    loadMoreButton.style.display = 'none';
    loader.style.display = 'none';
  }
  if (loaderSpinner) {
    loaderSpinner.remove();
  } else {
    if (images.totalHits <= currentPage * imagesPerPage) {
      iziToast.error({
        message:
          'We are sorry, but you have reached the end of search results.',
        position: 'topRight',
        iconUrl: iconReject,
        backgroundColor: '#EF4040',
        messageColor: 'white',
        timeout: 5000,
      });
      loadMoreButton.style.display = 'none';
      loader.style.display = 'none';
      document.querySelector('#search-input').value = '';
      lightbox.refresh();
      return;
    }
    loadMoreButton.disabled = images.hits.length < imagesPerPage;
    if (images.hits.length > 0) {
      loadMoreButton.style.display = 'block';
      loader.style.display = 'none';
    }
  }
  document.querySelector('#search-input').value = '';
});

loadMoreButton.addEventListener('click', async () => {
  loader.style.display = 'block';
  currentPage += 1;
  const images = await fetchImages(searchQueryGlobal, currentPage);
  const imageGallery = renderImageGallery(images.hits);
  imageGallery.forEach(imageCard => {
    gallery.appendChild(imageCard);
  });
  const imageCard = gallery.children[0];
  const imageCardHeight = imageCard.getBoundingClientRect().height;
  window.scrollBy({
    top: imageCardHeight * 2,
    behavior: 'smooth',
  });
  lightbox.refresh();
  loader.style.display = 'none';
  loadMoreButton.disabled = images.hits.length < imagesPerPage;
});
