import React from 'react'
import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {

   const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onPictureSubmit();
        }
    }

    return (
        <div onKeyPress={handleKeyPress}>
            <p className='f3 center'>
                This Smart Brain App will detect faces in your pictures.
               </p>
            <p className='f3 center'>
                <strong>Give it a try!</strong>
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-black' type='submit'
                    onClick={onPictureSubmit}> Detect
                    </button>
                </div>
            </div>
        </div>
    )
}




export default ImageLinkForm;
