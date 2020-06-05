import React from 'react'
import './track.css'
import { ReactComponent as PlayIcon } from '../../Assests/icons/play.svg'

const Track = ({data, onTrack}) =>{
    const { duration, name } = data

    return (
        <div className='track'>
            <PlayIcon onClick={()=> onTrack(data) } className="play-icon play"/>
            <div className="track-name"> {name} </div>
            <div className="track-duration"> {duration} </div>
        </div>
    )
}
export default Track