import React from 'react'
import { connect } from 'react-redux';
import './Facerecognition.css'

const Facerecognition = ({ imageUrl, faceBoxes, error, pending }) => {
    if (error) {
        alert(error)
    }

    return (
        <div className='center ma image-container '>
            <div className='absolute mt2 '>
                {pending && <div className="analzing" ><h1>Analyzing...</h1></div>}
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
const mapStateToProps = ({ imageInput: { imageUrl, faceBoxes, error, isPending } }) => {
    return {
        imageUrl,
        faceBoxes,
        error,
        pending: isPending
    }
}

export default connect(mapStateToProps)(Facerecognition);