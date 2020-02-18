let imagesToLoad = document.querySelectorAll('source[data-src]');


const loadImages = (image) => {
        image.setAttribute('srcset', image.getAttribute('data-src'));
        
        image.parentElement.lastElementChild.onload = () => {
            image.removeAttribute('data-src');
            image.parentElement.lastElementChild.className = 'clear';
        };
};



imagesToLoad.forEach((source) => {
    loadImages(source);
  });