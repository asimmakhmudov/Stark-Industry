import React from 'react'
import ironman1 from '../assets/movies/ironman1.jpg';
import ironman2 from '../assets/movies/ironman2.jpg';
import ironman3 from '../assets/movies/ironman3.jpg';
const Movies = () => {
    return (
        <div className='movies' id='movies'>
            <h1>Movies</h1>
            <div className="series">
                <div className="series-item">
                    <img src={ironman1} alt="ironman1" />
                    <p>When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                    <a href=""><button>Watch</button></a>
                </div>
                <div className="series-item">
                    <img src={ironman2} alt="ironman2" />
                    <p>When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                    <a href=""><button>Watch</button></a>
                </div>
                <div className="series-item">
                    <img src={ironman3} alt="ironman3" />
                    <p>When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.</p>
                    <a href=""><button>Watch</button></a>
                </div>
            </div>
        </div>
    )
}

export default Movies