const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// song list
const songs = [
	{
		name: 'afrojack',
		displayName: 'Take Over Control',
		artist: 'AfroJack feat Eva Simons',
	},
	{
		name: 'bhangra',
		displayName: 'Nachdi De',
		artist: 'Aman Hayer',
	},
	{
		name: 'americanAuthors',
		displayName: 'Best Day of My Life',
		artist: 'American Authors',
	},
	{
		name: 'eagleEye',
		displayName: 'Save Tonight',
		artist: 'Eagle Eye Cherry',
	},
];

// play check
let playing = false;

// play
const playSong = () => {
	playing = true;
	playBtn.classList.replace('fa-play', 'fa-pause');
	playBtn.setAttribute('title', 'Pause');
	music.play();
};

// pause
const pauseSong = () => {
	playing = false;
	playBtn.classList.replace('fa-pause', 'fa-play');
	playBtn.setAttribute('title', 'Play');
	music.pause();
};

playBtn.addEventListener('click', () => (playing ? pauseSong() : playSong()));

// DOM update
const loadSong = (song) => {
	title.textContent = song.displayName;
	artist.textContent = song.artist;
	music.src = `music/${song.name}.m4a`;
	image.src = `img/${song.name}.jpg`;
};

// current
let songIndex = 0;

// previous
const prevSong = () => {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	loadSong(songs[songIndex]);
	playSong();
};

// next
const nextSong = () => {
	songIndex++;
	if(songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
};

loadSong(songs[songIndex]);

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
