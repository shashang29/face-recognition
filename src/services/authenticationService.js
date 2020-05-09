import BACKEND_URL from './backend-Url';

const getUserdata = (userId) => {
    const token = window.sessionStorage.getItem('token');
    return fetch(`${BACKEND_URL}/profile/${userId}`,
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

export const loginUserService = ({ email, password }) => {
    return fetch(`${BACKEND_URL}/signin`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.userId && data.success === 'true') {
                window.sessionStorage.setItem('token', data.token);
            }
            return getUserdata(data.userId);
        })
};


export const registerUserService = ({ userData }) => {
    return fetch(`${BACKEND_URL}/register`, {
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

export const sessionService = (token) => {
    return fetch(`${BACKEND_URL}/signin`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(resp => resp.json())
        .then(data => {
            if (data && data.id) {
                return getUserdata(data.id)
            }
        })
        .catch(console.log)
}