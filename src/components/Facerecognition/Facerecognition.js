import React from 'react'
import { connect } from 'react-redux';
import './Facerecognition.css'

const Facerecognition = ({ imageUrl, faceBoxes, error }) => {
    if (error) {
        alert(error)
    }
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' width='500px' height='auto' alt='' src={imageUrl} />
                {faceBoxes.map((box, index) => (
                    <div key={index} className='bounding-box'
                        style={{
                            top: box.topRow,
                            right: box.rightCol,
                            bottom: box.bottomRow,
                            left: box.leftCol
                        }}>

                    </div>))}

            </div>


        </div>
    )

}
const mapStateToProps = ({ imageInput: { imageUrl, faceBoxes, error } }) => {
    return {
        imageUrl,
        faceBoxes,
        error
    }
}

export default connect(mapStateToProps)(Facerecognition);