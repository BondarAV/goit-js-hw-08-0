import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import * as galleryItems from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

galleryItems.galleryItems.forEach(galleryItem => {
  gallery.insertAdjacentHTML("beforeend", `
    <li class="gallery__item">
      <a class="gallery__link" href="${galleryItem.original}">
        <img
          class="gallery__image"
          src="${galleryItem.preview}"
          alt="${galleryItem.description}"
        />
      </a>
    </li>
  `);
});

const lightbox = new SimpleLightbox('.gallery__link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems.galleryItems);
