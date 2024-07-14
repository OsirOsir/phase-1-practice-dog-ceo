console.log('%c HI', 'color: firebrick');

document.addEventListener("DOMContentLoaded", () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  // Fetch and display dog images
  fetch(imgUrl)
    .then(res => res.json())
    .then(imageData => {
      addImagesToDOM(imageData.message);
    })
    .catch(error => console.error('Error fetching images:', error));

  // Fetch and display dog breeds
  fetch(breedUrl)
    .then(res => res.json())
    .then(breedData => {
      addBreedsToDOM(breedData.message);
    })
    .catch(error => console.error('Error fetching breeds:', error));
});

function addImagesToDOM(images) {
  const imageContainer = document.getElementById('dog-image-container');
  images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = "Dog Image";
    imgElement.style.width = '200px'; // Optional styling
    imgElement.style.margin = '10px'; // Optional styling

    imageContainer.appendChild(imgElement);
  });
}

function addBreedsToDOM(breeds) {
  const breedList = document.getElementById('dog-breeds');
  for (const breed in breeds) {
    const li = document.createElement("li");
    li.innerText = breed;
    breedList.appendChild(li);
  }
}
