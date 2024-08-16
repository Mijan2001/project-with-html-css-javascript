fetch('https://hatrabbits.com/en/random-image/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network error is occuqured', response.statusText);
        }
        return response.json();
    })
    .then(blob => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error(error);
    });
