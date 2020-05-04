import React, { useState } from 'react';
import { connect } from 'react-redux';
import { submitImage, resetImageState } from '../../actions/user.actions';
import './ImageLinkForm.css';


const ImageLinkForm = ({ onImageSubmit, resetImageState }) => {
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmitImage = (event) => {
    event.preventDefault();
    if (imageUrl) {
      resetImageState();
      onImageSubmit(imageUrl)
    }
  }

  const handleInputChange = ({ target }) => {
    setImageUrl(target.value)
  }

  return (
    <form onSubmit={handleSubmitImage}>
      <p className='f3 center'>
        This Smart Brain App will detect faces in your pictures.
               </p>
      <p className='f3 center'>
        <strong>Give it a try!</strong>
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input type='text' className='f4 pa2 w-70 center' onChange={handleInputChange} />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-black'
            onSubmit={handleSubmitImage}
            type='submit'
          > Detect</button>
        </div>
      </div>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onImageSubmit: input => dispatch(submitImage(input)),
  resetImageState: () => dispatch(resetImageState())
});

export default connect(null, mapDispatchToProps)(ImageLinkForm);
