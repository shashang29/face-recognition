export const loginUserService = (userData) => {
    return fetch('http://localhost:3005/signin', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: userData.email,
            password: userData.password
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.userId && data.success === 'true') {
                window.sessionStorage.setItem('token', data.token);
            }

            return fetch(`http://localhost:3005/profile/${data.userId}`,
                {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': data.token
                    }
                })
                .then(response => response.json())
                .catch(err => err)

        })
};


export const registerUserService = ({userData}) => {
    console.log(userData)
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