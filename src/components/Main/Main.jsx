import React, {useState} from 'react'
import './main.css'
import TrackList from '../TrackList/TrackList'
import Player from '../Player/Player'
import TrackMenu from '../AddTrackMenu/AddTrackMenu'
import TracksJSON from '../../Assests/testJSON/test'

const Main = () =>{
    const [tracks, setTracks] = useState(TracksJSON);
    const [currentTrack, setCurrentTrack] = useState(tracks[0])
    const [addTrackModal, setAddTrackModal] = useState(false);

    const toggleShow = () => {
        setAddTrackModal(!addTrackModal)
    }

    const addTrack = (track) => {
        TracksJSON.push(track);
        setTracks([...TracksJSON]);
    }
    
    return(
        <div className="main">
            <Player track={currentTrack}/>
            <TrackList tracks={tracks} onTrackSelected={setCurrentTrack}/>
            <div className='add-track-btn' onClick={toggleShow}>
                Add track
            </div>
            <TrackMenu onAddTrack={addTrack} addTrackModal={addTrackModal} /> 
        </div>
    )
}

export default Main