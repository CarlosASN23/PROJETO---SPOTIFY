const searchInput =document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm){

    const url=`http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        then((response) => response.json());
        then((result) => displayResult(result));
}

function displayResult(result){

    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.foreach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultsArtist.classList.remove('hidden');
}

document.addEventListener('input', function(){
    const searchTerm = searchInput.ariaValueMax.toLocaleLowerCase();
    if(searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }
})
