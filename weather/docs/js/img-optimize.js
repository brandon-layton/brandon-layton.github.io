//grab all sorces with atribute data-src
let imagesToLoad = document.querySelectorAll('source[data-src]');

const loadImages = (image) => {
        //make the image load before displayed
        image.setAttribute('srcset', image.getAttribute('data-src'));
        //after it displays
        image.parentElement.lastElementChild.onload = () => {
            image.removeAttribute('data-src');
            image.parentElement.lastElementChild.className = 'clear';
        };
};

//call load images for each image
imagesToLoad.forEach((source) => {
    loadImages(source);
  });