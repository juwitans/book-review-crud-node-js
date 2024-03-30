const APILINK = "http://localhost:3000/api/bookreviews";

const formElement = document.querySelector('.form');

formElement.addEventListener('submit', event => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const authors = document.getElementById('authors').value;
    const review = document.getElementById('review').value;
    const rate = document.getElementById('rate').value;

    const data = {
        title: title,
        authors: `[${authors}]`,
        review: review,
        rate: rate
    };

    fetch(APILINK, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.created) {
            throw new Error('Failed to add new book review');
        }
        return response.json();
    })
    .then(data => {
        console.log('New book review added:', data);
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error('Error adding new book review:', error);
    });
})