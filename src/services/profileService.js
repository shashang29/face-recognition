export const updateProfileService = (userData) => {
    return fetch(`http://52.66.20.46:3005/profile/${userData.id}`, {
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