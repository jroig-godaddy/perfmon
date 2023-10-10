const axios = require('axios');

const getToken = async (user, password, env, debug) => {
    if (debug) {
        console.log(`\nGetting JWT for ${user}/${password} in ${env}\n`);
    }
    
    let ssoUrl = 'https://sso.test-godaddy.com/v1/api/token';
    if (env === 'prod') {
        ssoUrl = 'https://sso.godaddy.com/v1/api/token';
    }

    const payload = {
        username: user,
        password: password,
        plid: 1,
    };
    const options = {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        }
    }

    return axios.post(ssoUrl, payload, options)
        .then((results) => {
            return results.data.data;
        })
        .catch((error) => {
            console.log('error', error.response);
        });
}


module.exports = getToken;
