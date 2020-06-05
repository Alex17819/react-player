import React, { useState } from 'react'
import './add-track-menu.css'

const AddTrackMenu = (props) => {

    const onButtonClick = () => {
        let nameInput = document.getElementById("newName")
        let nameValue = nameInput.value

        let authorInput = document.getElementById("newAuthor")
        let authorValue = authorInput.value

        let genreInput = document.getElementById("newGenre")
        let genreValue = genreInput.value

        let durationInput = document.getElementById("newDuration")
        let durationValue = durationInput.value

        let imageInput = document.getElementById("newImage")
        let imageValue = imageInput.value

        let colorInput = document.getElementById("newColor")
        let colorValue = colorInput.value
        
        if (nameValue && authorValue && genreValue && durationValue && imageValue && colorValue) {
            addTrackInfo( nameValue, authorValue, genreValue, durationValue, imageValue, colorValue )
        }
    }
    const addTrackInfo = (nameValue, authorValue, genreValue, durationValue, imageValue, colorValue) =>{
        props.onAddTrack({ 
            name: nameValue, 
            author: authorValue, 
            genre: genreValue, 
            duration: durationValue, 
            image: imageValue, 
            color: colorValue 
        })
    }
    return(
        <div style={{ display: props.addTrackModal ? 'block' : 'none' }} className='menu'>

            <div className='menu-text'>Track Name</div>
            <div className='menu-text'>
            <input id='newName' type="text"/>
            </div>

                <div className='menu-text'>Author</div>
            <div className='menu-text'>
                <input id='newAuthor' type="text"/>
            </div>

            <div className='menu-text'>Genre</div>
            <div className='menu-text'>
                <input id='newGenre' type="text"/>
            </div>

            <div className='menu-text'>Duration</div>
            <div className='menu-text'>
                <input id='newDuration' type="text"/>
            </div>

            <div className='menu-text'>Image url</div>
            <div className='menu-text'>
                <input id='newImage' type="text"/>
            </div>

            <div className='menu-text'>Color rgb</div>
            <div className='menu-text'>
                <input id='newColor' type="text"/>
            </div>

            <div onClick={onButtonClick} className='add-track-btn'>
                Submit
            </div>
        </div>
    )
}
export default AddTrackMenu