import 'whatwg-fetch';
import { SERVER_URL } from './global';


// for json
export function stack(url, body, method) {
    console.log("body: ", body);

    const options = {
        method: method,
        body: body ? JSON.stringify(body) : {},
        headers: {
            "Content-Type": "application/json"
        },
    };

    console.log("options: ", options);
    console.log("SERVER_URL: ", SERVER_URL);
    return fetch(SERVER_URL + url, options)
            .then(checkStatus)
            .then( (response) => {
                return response.json();   // transform back to json
            })
            .catch((err) => {
                return err;
            })
};


const errorHandler = (err)  => {
    const error = err || 'Default error message';
};

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        const error = new Error(response.errMsg);
        error.response = response;

        throw error;
    }
};

export const routes = {
   contact: "/api/node/myWebsite/contact"
}

