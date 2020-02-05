import React from 'react'
import './Facerecognition.css'

const Facerecognition = ({ imageUrl, boxes }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' width='500px' height='auto' alt='' src={imageUrl} />
                {boxes.map((box, index) => (
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


export default Facerecognition