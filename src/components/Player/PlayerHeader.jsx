import React, {useState} from 'react'
import './player.css'
import { ReactComponent as PlayIcon } from '../../Assests/icons/play.svg'
import { ReactComponent as PauseIcon } from '../../Assests/icons/pause.svg'


const PlayerHeader = ({ track }) =>{

    const [playing, setPlaying] = useState(false) 
    const togglePlaying = () => { 
        setPlaying(!playing)
        console.log(track.color)
    }
    
    return(
        <div className='player-header'>
            <div className='player-image'>
                <img src={track.image} alt=""/>
            </div>
            <div className='player-control-gradient' style={{ 
                height: playing ? '30%' : '100%', 
                background: `linear-gradient( transparent, ${track.color })`
            }}>
                <div>
                    <div className='player-control'>
                        <div className="player-button" onClick={togglePlaying}>
                        {
                            playing?
                            <PlayIcon/>    
                            :
                            <PauseIcon className='pause-button' width='40px'/>
                        }
                        </div>
                        <div className="player-track-info">
                            <div className='player-track-stop'>
                                <div className="player-track-info-details">
                                    <div className='player-track-name'> {track.author} - {track.name} </div>
                                    <div className='player-track-time'> {track.duration} </div>
                                </div>

                                <div className='player-track-bar'>
                                    <div className="progress-bar">
                                        <div className  ="progress"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlayerHeader 