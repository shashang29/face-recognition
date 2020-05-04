export const faceRecognitionService = ({ payload }) => {
    const imageurl = payload;
    return fetch('http://localhost:3005/imageurl', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem('token')
        },
        body: JSON.stringify({
            input: imageurl
        })
    })
        .then(response => response.json())
        .catch(err => { throw Error })
}

export const updateImageService = (userId) => {
    return fetch('http://localhost:3005/image', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem('token')
        },
        body: JSON.stringify({
            id: userId
        })

    })
        .then(response => response.json())
        .catch(err => err)
}


export const calculateFaceLocationService = (data) => {
    let boxes = []
    for (let i = 0; i < data.outputs[0].data.regions.length; i++) {
        const clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width)
        const height = Number(image.height)
        boxes.push({
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height),
        })
    }
    return boxes;

}