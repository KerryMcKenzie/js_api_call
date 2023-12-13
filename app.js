//Section: 28 0 300. Project TV App // New TV App Code

// const loadTVShows = async () => {
//     try {
//         const res = await fetch("https://api.tvmaze.com/search/shows?q=dark");
//         const data = await res.json();
//         console.log(data);
//     } catch (e) {
//         console.log("ERROR!!!", e);
//     }
// };

// loadTVShows();

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}



