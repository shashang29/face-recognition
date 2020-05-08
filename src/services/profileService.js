export const updateProfileService = (userData) => {
    return fetch(`https://b0ea91c4.ngrok.io/profile/${userData.id}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem('token')
        },
        body: JSON.stringify({
            formInput: userData
        })
    }).then(response => response)
        .catch(err => err)
}