import React from 'react'
import './ImageLinkForm.css'
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 center'>
                This Smart Brain App will detect faces in your pictures.
               </p>
            <p className='f3 center'>
                <strong>Give it a try!</strong>
            </p>
            <div className='center shadow-3'>
                <div className='center form pa4 br3 shadow-5'>
                    <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-black'
                    onClick={onButtonSubmit}> Detect
                    </button>
                </div>
            </div>
        </div>
    )
}




export default ImageLinkForm;
