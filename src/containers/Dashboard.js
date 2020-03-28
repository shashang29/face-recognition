import React from 'react';
import {connect} from 'react-redux';

import Facerecognition from '../components/Facerecognition/Facerecognition';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';


const Dashboard = (props) => {

    return (
        <div>
            <Rank />
            <ImageLinkForm />
            <Facerecognition />
        </div>
    )
}
const mapStateToProps=(state)=>({
    ...state
})

export default connect(mapStateToProps)(Dashboard);