import React from 'react'
import './main.css'

import TrackList from '../TrackList/TrackList'
import Player from '../Player/Player'


const Main = () =>{
    
    return(
        <div className="main">
            <Player/>
           <TrackList/> 
        </div>
    )
}

export default Main