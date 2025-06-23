alert ('Thank you for running the webpage!');


const phonkTracks = ['phonk1.mp3', 'phonk2.mp3', 'phonk3.mp3'];

function playRandomPhonk() {
    const randomTrack = phonkTracks[Math.floor(Math.random() * phonkTracks.length)];
    const audioElement = document.getElementById('background-audio');
    const sourceElement = document.getElementById('audio-source');
    sourceElement.src = randomTrack;
    audioElement.load();
    audioElement.play();
}

playRandomPhonk();

