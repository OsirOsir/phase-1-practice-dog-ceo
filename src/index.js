console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
    .then(res => res.json())
    .then(imageData => {
      addImagesToDOM(imageData.message);
    })
});

function addImagesToDOM(images) {
  const imageContainer = document.getElementById('dog-image-container');
  images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = "Dog Image";

    imageContainer.appendChild(imgElement);
  });
}