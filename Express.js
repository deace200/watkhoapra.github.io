const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/watkhoapra', (req, res) => {
    res.sendFile(__dirname + '/public/Watkhoapra.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;

    if (query) {
        window.location.href = `https://www.google.com/search?q=${query}`;
    }
});