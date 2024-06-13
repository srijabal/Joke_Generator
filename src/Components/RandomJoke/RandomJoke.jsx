import React, { useState } from 'react';
import './RandomJoke.css';


const RandomJoke = () => {
    const [jokes, setJokes] = useState([]);
    const [joke, setJoke] = useState({ text: "Loading..." });

    const loadJokes = async () => {
        const response = await fetch('https://official-joke-api.appspot.com/random_ten');
        const jokesData = await response.json();
        setJokes(jokesData);
        if (jokesData.length > 0) {
            setJoke(jokesData[0]);
        }
    };

    const random = () => {
        if (jokes.length > 0) {
            const select = jokes[Math.floor(Math.random() * jokes.length)];
            setJoke(select);
        }
    };

  
    if (jokes.length === 0) {
        loadJokes();
    }

    return (
        <div className='container'>
            <div className='title'>Chuckle Corner</div>
            <div className='joke'>{joke.setup}</div>
            <div>
                <div className="line"></div>
                <div className='bottom'>
                    <div className="button">
                        <button onClick={random}>Generate Next Joke</button>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomJoke;
