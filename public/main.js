const API = "http://localhost:3000/api/bookreviews/";

fetch(API)
    .then(res => res.json())
    .then(data => {
        const section = document.getElementById('section');
        data.forEach(review => {
            const divRow = document.createElement('div');
            divRow.classList.add('row');
            const divColumn = document.createElement('div');
            divColumn.classList.add('column');
            const divCard = document.createElement('div');
            divCard.classList.add('card');

            divCard.innerHTML = `
                <center><h3>${review.title}</h3></center>
                <p id="authors">Authors: ${review.authors.join(', ')}</p>
                <p id="rate">Rate: ${review.rate} stars</p>
                <form action="review.html" method="GET">
                    <input type="hidden" name="id" value="${review._id}">
                    <button type="submit">See review</button>
                </form>
            `;

            divColumn.appendChild(divCard);
            divRow.appendChild(divColumn);
            section.appendChild(divRow);
        });
    })
    .catch(error => console.error('Error fetching reviews:', error));
