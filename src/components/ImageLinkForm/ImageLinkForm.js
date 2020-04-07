import React from 'react';
import { connect } from 'react-redux';
import { setImageInput, submitImage, setImageURL } from '../../actions/actions';
import './ImageLinkForm.css';


const ImageLinkForm = (props) => {

  const handleSubmitImage = (event) => {
    event.preventDefault();
    props.onImageSubmit(props.input)
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
          <input type='text' className='f4 pa2 w-70 center' onChange={props.onImageInputChange} />
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-black'
            onSubmit={handleSubmitImage}
            type='submit'
          > Detect
                    </button>
        </div>
      </div>
    </form>
  )
}


const mapStateToProps = state => {
  return {
    input: state.imageInput.input
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onImageInputChange: event =>
      dispatch(setImageInput(event.target.value)),
    onImageSubmit: input => {
      dispatch(submitImage(input))
      dispatch(setImageURL(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageLinkForm);
