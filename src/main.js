import images from './images.js';
import makeHtmlTemplate from './make-html-template.js';

const imageGallery = document.getElementById('image-gallery');

images.forEach(image => {
    const dom = makeHtmlTemplate(image);
    imageGallery.appendChild(dom);
});