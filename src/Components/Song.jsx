import './Song.css';
import songData from '../api/songData.json'

export const Song = () => {
    return (
    <ul className="song-list"> 
        {songData.map((song,index) =>
        (
        <li key={index}>
            <div className="song-card">
                <img src={song.image} alt={song.title}></img>
                <h2>{song.title}</h2>
                <h3>Singer: {song.singer}</h3>
                <p><strong>Description:</strong> {song.description}</p>
                <a href={song.watch} target="_blank" rel="noopener noreferrer">
                <button>Watch Now</button></a>
            </div>
            </li> 
        ))};
    </ul>
 
    );
};