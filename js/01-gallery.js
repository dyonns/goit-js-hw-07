import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
    const galleryContent = document.createElement("div");
    galleryContent.classList.add("gallery__item")
    
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link")
    galleryLink.href = original;
    galleryContent.append(galleryLink);

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image")
    galleryImage.src = preview;
    galleryImage.alt = description;
    galleryImage.dataset.source = original;
    galleryLink.append(galleryImage);


    galleryImage.addEventListener("click", (event) => openLargeImage(event, original))

    console.log(galleryContent)
    gallery.append(galleryContent)    
})


function openLargeImage(event, src) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const keydownHandler = event => {
        if (event.key === 'Escape') {
            instance.close()
            gallery.removeEventListener('keydown', keydownHandler)
        }
    }

    const instance = basicLightbox.create(`<img src="${src}" width="800" height="600">`);
    gallery.addEventListener('keydown', keydownHandler)
    instance.show()

}