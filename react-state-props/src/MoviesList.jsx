//You are tasked with developing an interactive 'Favorite Movies' list component in React. 
//This component should allow users to add movies to a list, remove them, and toggle between different views. 
//The list of movies will be hardcoded for simplicity. 
//Your challenge is to implement this functionality using functional components and React Hooks.

import React, { useState } from 'react';

function MoviesList() {
    const [movies, setMovies] = useState([
        { id: 1, name: 'Barbie', genre: 'Comedy' },
        { id: 2, name: 'Planet of the Apes', genre: 'Sci-Fi' },
        { id: 3, name: 'The Matrix', genre: 'Sci-Fi' },
    ]);

    const [view, setView] = useState('all'); //to view all movies or just sci-fi

    const [newMovieName, setNewMovieName] =useState('');
    const [newMovieGenre,setNewMovieGenre] = useState('');


    const addMovie = ()=> {
        const newMovie = {
            id: movies.length + 1,
            name: newMovieName,
            genre: newMovieGenre,
        };
        setMovies([...movies, newMovie]);
    }

    const removeMovie = id => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    const toggleView = () => {
        setView(view === 'all' ? 'sci-fi' : 'all');
    };

    return (
        <div>
            <h1>Favorite Movies</h1>

            <div>
                <input
                    type="text"
                    placeholder="Movie Name"
                    value={newMovieName}
                    onChange={(e) => setNewMovieName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Movie Genre"
                    value={newMovieGenre}
                    onChange={(e) => setNewMovieGenre(e.target.value)}
                />
                <button onClick={addMovie}>Add Movie</button>
            </div>

            <button onClick={toggleView}>Toggle View - All or Sci Fi</button>

            <ul>
                {movies.filter(movie => view === 'all' || movie.genre === 'Sci-Fi')
                .map(movie => ( 
                    <li key={movie.id}>
                        {movie.name} - {movie.genre}
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                    </li>
                ))
                }
            </ul>
        </div>
    );
}

export default MoviesList;