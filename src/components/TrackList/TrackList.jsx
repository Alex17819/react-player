import React from 'react'
import './track-list.css'
import Track from '../Track/Track'

const TrackList = ({ tracks, onTrackSelected}) =>{

    return(
        <div className="track-list">
            <div className='header'>Tracks</div>
            {tracks.map( track => <Track onTrack={onTrackSelected} key={track.name} data={track}/>)}

        </div>
    )
}

export default  TrackList