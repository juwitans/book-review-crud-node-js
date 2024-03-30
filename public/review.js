const params = new URLSearchParams(window.location.search);
const id = params.get('id');
document.getElementById('bookId').textContent = id;

document.getElementById('editpage').addEventListener('submit', function(event) {
      document.getElementById('idInput').value = id;
    });

const API = "http://localhost:3000/api/bookreviews/" + id;

document.getElementById('delete').addEventListener('click', function() {
var confirmed = confirm("Are you sure you want to delete this review?");
if (confirmed) {
    fetch(API, {
        method: 'DELETE'
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        alert("Successfully deleted");
        window.location.href = "index.html";
    })
    .catch(error => {
        console.error('Error deleting review:', error);
        window.location.href = "index.html";
    });
  }
});

fetch(API)
    .then(res => {
        return res.json();
    })
    .then(data => {
        document.querySelector('h3').textContent = `${data.title} - ${data.authors}`;
        document.querySelector('#review').textContent = `Review: ${data.review}`;
        document.querySelector('#rate').textContent = `Rate: ${data.rate} stars`;
    })
    .catch(error => console.log(error));

