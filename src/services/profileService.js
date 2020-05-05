export const updateProfileService = ({ payload }) => {
    console.log(payload)
    return fetch(`http://localhost:3005/profile/5`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem('token')
        },
        body: JSON.stringify({
            formInput: payload
        })
    }).then(response => response)
        .catch(console.log)
}