export const loginAuthentication = (userData) => {
    // const token = window.sessionStorage.getItem
    // if (token) {
    //     return fetch('http://localhost:3005/signin', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': token
    //         }
    //     })
    //         .then(response => response.json())
    //         .catch(err => err)
    // } else {

        return fetch('http://localhost:3005/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userData.email,
                password: userData.password
            })
                .then(response => response.json())
                .catch(err => err)
        })
    }
// }


export const getUserData = (userId) => {
    console.log(userId)
    const token = window.sessionStorage.getItem('token');

    return fetch(`http://localhost:3005/profile/${userId}`,
        {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        .then(response => response.json())
        .catch(err => err)
}


export const registerUserService = ({ userData }) => {
    return fetch('http://localhost:3005/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            password: userData.password

        })
    })
        .then(response => response.json())
        .catch(err => err)
}