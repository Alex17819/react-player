import React from 'react'
import './player.css'
import PlayerHeader from './PlayerHeader';

const Player = ({ track }) => {
    const { author, genre, duration, name } = track

    return(
        <div className="player">
            <PlayerHeader track={track}/>

            <div className='track-info'>
                <div className="track-info-content">
                    <div className='track-info-content-left'>
                        Author
                    </div>
                    <div className='track-info-content-right'>
                        {author} 
                    </div>
                </div>

                <div className="track-info-content">
                    <div>
                        Name
                    </div>  
                    <div>
                        {name}
                    </div>
                </div>
                <div className="track-info-content">
                    <div>
                        Duration
                    </div>  
                    <div>
                        {duration}
                    </div>
                </div>
                <div className="track-info-content">
                    <div>
                        Genre
                    </div>  
                    <div>
                        {genre} 
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Player