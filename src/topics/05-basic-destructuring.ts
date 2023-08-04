interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 10,
    songDuration: 36,
    song: "Mess",
    details : {
        author: "Ed Sheran",
        year: 2015
    }
}

//desestructuracion
const {song: anotherSong, songDuration: duration, details } = audioPlayer;
const {author} = details;

console.log("Song: ", anotherSong );
console.log("Duration: ", duration );
console.log("Author: ", details.author );



//sin desestructuracion
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']

console.error('Personaje 3: ', dbz[3] || 'No hay Personaje');

// con desestructuracion
const [ , , trunks = 'Not found']: string[] = ['Goku','Vegeta'];
console.log(trunks);


export{}