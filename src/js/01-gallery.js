// Описаний в документації
import simpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
console.log(simpleLightbox);
import 'simplelightbox/dist/simple-lightbox.min.css';
// --------------
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEL = document.querySelector('.gallery');

onCreatGallery();

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
});

function onCreatGallery() {
  const galleryItemsEl = galleryItems.reduce(
    (acc, { preview, original, description }) =>
      (acc += `<li>
 <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
   `),
    ''
  );
  galleryEL.insertAdjacentHTML('beforeend', galleryItemsEl);
  console.log(galleryItemsEl);
}
galleryEL.style.listStyle = 'none';
