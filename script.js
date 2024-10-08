// Select the heading using getElementById
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'DOM Manipulation Made Easy!'; // Change the text of the heading

// Select all paragraphs with the class text-content using getElementsByClassName
const textParagraphs = document.getElementsByClassName('text-content');
for (let paragraph of textParagraphs) {
    paragraph.style.color = 'blue'; // Change the color of paragraphs
}

// Select the image using querySelector
const mainImage = document.querySelector('#main-image');
mainImage.src = 'https://via.placeholder.com/300'; // Change the source of the image

// Select the container div using querySelector
const containerDiv = document.querySelector('.container');
containerDiv.style.backgroundColor = '#f0f0f0'; // Change the background color of the container

// Select all paragraphs inside the container using querySelectorAll
const containerParagraphs = containerDiv.querySelectorAll('p');
containerParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Updated paragraph ${index + 1} in the container.`; // Update the text of all paragraphs inside the container
});
