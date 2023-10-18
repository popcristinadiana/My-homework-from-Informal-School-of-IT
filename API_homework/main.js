document.addEventListener("DOMContentLoaded", function () {
  const dogImageElement = document.getElementById("dogImage");
  const getRandomDogButton = document.getElementById("getRandomDog");
  const editDogButton = document.getElementById("editDog");
  const deleteDogButton = document.getElementById("deleteDog");
  const addDogButton = document.getElementById("addDog");

  let currentImageUrl = "";

  function getRandomDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const imageUrl = data.message;
        currentImageUrl = imageUrl;
        dogImageElement.innerHTML =
          '<img src="' + imageUrl + '" alt="Random Dog">';
      })
      .catch(function (error) {
        console.error("Error fetching dog image:", error);
      });
  }

  getRandomDogImage();

  getRandomDogButton.addEventListener("click", getRandomDogImage);

  editDogButton.addEventListener("click", function () {
    const newAltText = prompt(
      "Enter new alt text for the dog image:",
      "Edited Dog"
    );
    if (newAltText !== null) {
      const image = dogImageElement.querySelector("img");
      if (image) {
        image.alt = newAltText;
      }
    }
  });

  deleteDogButton.addEventListener("click", function () {
    dogImageElement.innerHTML = "";
    currentImageUrl = "";
  });

  addDogButton.addEventListener("click", function () {
    const imageUrl = prompt("Enter the URL of a dog image:");
    if (imageUrl) {
      currentImageUrl = imageUrl;
      dogImageElement.innerHTML =
        '<img src="' + imageUrl + '" alt="Random Dog">';
    }
  });
});
