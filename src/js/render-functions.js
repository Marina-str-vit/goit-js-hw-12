export function createMarkup(images) {
    //деструктурую, щоб розкидати інфу по картці
//     return arr.map(({ poster_path, release_date, original_title, vote_average }) => `
//         <li class="movie-card">        
// // https://image.tmdb.org/t/p/w300 - це інфа з документації; ${poster_path} - це ключ кожної окремої картки
//             <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
//             <div class="movie-info">
//                 <h2>${original_title}</h2>
//                 <p>Release Date: ${release_date}</p>
//                 <p>Vote Average: ${vote_average}</p>
//             </div>
//         </li>
//     `).join("");
    return images.map(({ 
      webformatURL, 
      largeImageURL, 
      tags, 
      likes, 
      views, 
      comments, 
      downloads 
  }) => ` <li class="gallery-list-item">
              <a class="gallery-link" href="${largeImageURL}">
                  <img class="gallery-img" src="${webformatURL}" 
                      alt="${tags}" 
                      title="${tags}" />
                  <ul class="sub-list">
                      <li class="sub-list-item">
                          <p>Likes: ${likes}</p>
                      </li>
                      <li class="sub-list-item">
                          <p>Views: ${views}</p>
                      </li>
                      <li class="sub-list-item">
                          <p>Comments: ${comments}</p>
                      </li>
                      <li class="sub-list-item">
                          <p>Downloads: ${downloads}</p>
                      </li>
                  </ul>
              </a>
          </li>` 
).join("");
}
// createMarkup()









// export function renderSearchForm() {
//   const searchForm = document.createElement('form');
//   searchForm.classList.add('search-form');

//   const searchInput = document.createElement('input');
//   searchInput.classList.add('search-input');
//   searchInput.type = 'text';
//   searchInput.id = 'search-input';
//   searchInput.placeholder = 'Search images...';

//   const searchButton = document.createElement('button');
//   searchButton.classList.add('search-button');
//   searchButton.type = 'submit';
//   searchButton.textContent = 'Search';

//   searchForm.appendChild(searchInput);
//   searchForm.appendChild(searchButton);

//   return searchForm;
// }
// export function renderImageGallery(images) {
//   return images.map(image => {
//     const imageCard = document.createElement('a');
//     imageCard.href = image.largeImageURL;
//     imageCard.classList.add('image-card');
//     const imageElement = document.createElement('img');
//     imageElement.src = image.webformatURL;
//     imageElement.alt = image.tags;
//     imageCard.appendChild(imageElement);
//     const info = document.createElement('div');
//     info.classList.add('info');
//     const likes = document.createElement('p');
//     likes.textContent = `Likes: ${image.likes}`;
//     info.appendChild(likes);
//     const views = document.createElement('p');
//     views.textContent = `Views: ${image.views}`;
//     info.appendChild(views);
//     const comments = document.createElement('p');
//     comments.textContent = `Comments: ${image.comments}`;
//     info.appendChild(comments);
//     const downloads = document.createElement('p');
//     downloads.textContent = `Downloads: ${image.downloads}`;
//     info.appendChild(downloads);
//     imageCard.appendChild(info);
//     return imageCard;
//   });
// }

// export function renderImageCard(image) {
//   const imageCard = document.createElement('div');
//   imageCard.classList.add('image-card');

//   const imageElement = document.createElement('img');
//   imageElement.src = image.webformatURL;
//   imageElement.alt = image.tags;
//   imageElement.dataset.largeImageURL = image.largeImageURL;

//   const info = document.createElement('div');
//   info.classList.add('info');

//   const likes = document.createElement('p');
//   likes.classList.add('likes');
//   likes.textContent = `Likes: ${image.likes}`;

//   const views = document.createElement('p');
//   views.classList.add('views');
//   views.textContent = `Views: ${image.views}`;

//   const comments = document.createElement('p');
//   comments.classList.add('comments');
//   comments.textContent = `Comments: ${image.comments}`;

//   const downloads = document.createElement('p');
//   downloads.classList.add('downloads');
//   downloads.textContent = `Downloads: ${image.downloads}`;

//   info.appendChild(likes);
//   info.appendChild(views);
//   info.appendChild(comments);
//   info.appendChild(downloads);

//   imageCard.appendChild(imageElement);
//   imageCard.appendChild(info);

//   return imageCard;
// }

