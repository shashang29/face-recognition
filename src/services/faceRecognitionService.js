export const faceRecognitionService = (ImageUrl) => {

    return fetch('http://localhost:3005/imageurl', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem('token')
        },
        body: JSON.stringify({
            input: ImageUrl
        })
    })
        .then(response => {
            if (!response.ok) throw Error
            else return response.json()
        })
}

export const updateImageService = (userId) =>{
    fetch('http://localhost:3005/image', {
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
        .catch(err=>err)
        // .then(count => {
        //     this.setState({
        //         user: {
        //             ...this.state.user,
        //             entries: count
        //         }

        //     })
        // })
        // .catch(console.log)
        }
// this.displayFaceBox(this.calculateFaceLocation(response))
//       })
//       .catch (console.log)
//   }