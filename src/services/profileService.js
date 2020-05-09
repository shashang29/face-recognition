import BACKEND_URL from './backend-Url';

export const updateProfileService = (userData) => {
    return fetch(`${BACKEND_URL}/profile/${userData.id}`, {
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