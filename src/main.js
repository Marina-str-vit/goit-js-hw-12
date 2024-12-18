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

loadMoreButton.addEventListener('click', onLoadMore);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
});

let currentPage = 1;
let searchQueryGlobal = '';
const imagesPerPage = 15;

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  loader.style.display = 'block';
  // кнопка не відображається
  loadMoreButton.style.display = 'none';
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
    gallery.innerHTML = '';
    searchQueryGlobal = searchQuery;
    try {
      const images = await fetchImages(searchQuery, currentPage);
      loadMoreButton.style.display = 'block';
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
      loader.style.display = 'none';
      document.querySelector('#search-input').value = '';
    }
    if (loaderSpinner) {
      loaderSpinner.remove();
      loadMoreButton.style.display = 'none';
      loader.style.display = 'none';
      document.querySelector('#search-input').value = '';
      lightbox.refresh();
    }
    // остання сторінка
    if ( images.totalHits <= currentPage * imagesPerPage && images.totalHits > 0) {
      iziToast.error({
        message:
          'We are sorry, but you have reached the end of search results.',
        position: 'topRight',
        iconUrl: iconReject,
        backgroundColor: '#EF4040',
        messageColor: 'white',
        timeout: 3000,
      });
      loadMoreButton.style.display = 'none';
      document.querySelector('#search-input').value = '';
      return;
    }
    if (images.hits.length > 0) {
      loadMoreButton.style.display = 'block';
      loader.style.display = 'none';
    }
  } catch (error) {
    iziToast.error({ message: error.message, });
    loadMoreButton.style.display = 'none';
  } finally {
    document.querySelector('#search-input').value = '';
  }
});


async function onLoadMore () {
    loader.style.display = 'block';
    loadMoreButton.style.display = 'block';
    currentPage += 1;
    try {
    const images = await fetchImages(searchQueryGlobal, currentPage);
    const imageGallery = renderImageGallery(images.hits);
    imageGallery.forEach(imageCard => {
      gallery.appendChild(imageCard);
    });
    const imageCard = document.querySelector('.image-card');
    const imageCardHeight = imageCard.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: imageCardHeight * 0.9,
      behavior: 'smooth',
    });
    lightbox.refresh();
    loader.style.display = 'none';
    // остання сторінка
    if (images.hits.length < imagesPerPage) {
      loadMoreButton.style.display = 'none';
    }
  } catch (error) {
    iziToast.error({
      message: error.message, 
      });
    loadMoreButton.style.display = 'none';
  } 
  }
