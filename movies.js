// JavaScript for searching movies
document.getElementById('movie-search').addEventListener('input', function(event) {
    let searchTerm = event.target.value.toLowerCase();
    let movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        let title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
