// const apiKey = '-H4NPAMWXj05O1ViSwfoQIYi3WCMd6XdZcWcs0DSSho'; // Replace with your Unsplash API access key

async function fetchRandomImage() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        const data = await response.json();
        console.log(data);
        const link = document.querySelector('#image-download-button a');
        link.setAttribute('href', `${data.links.download}`)
        link.setAttribute('download', `${data.alternative_slugs.en}`)


        document.body.style.backgroundImage = `url(${data.urls.full})`;
    } catch (error) {
        console.error('Error fetching random image:', error);
    }
}

fetchRandomImage();
