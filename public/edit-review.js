const params = new URLSearchParams(window.location.search);
const id = params.get('id');
document.getElementById('bookId').textContent = id;

const API = "http://localhost:3000/api/bookreviews/" + id;

fetch(API)
    .then(res => {
        return res.json();
    })
    .then(data => {
        document.querySelector('#title').textContent = `${data.title}`;
        document.querySelector('#author').textContent = `${data.author}`;
        document.querySelector('#review').textContent = `${data.review}`;
        document.querySelector('#rate').textContent = `${data.rate}`;
    })
    .catch(error => console.log(error));

const formElement = document.querySelector('.edit-review');

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
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update book review');
        }
        return response.json();
    })
    .then(data => {
        console.log('Succesfully update review:', data);
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error('Error update review:', error);
    });
})