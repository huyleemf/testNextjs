/* eslint-disable no-console */
/* eslint-disable no-alert */
import { BASE_API, PARENT_API } from './ApiConfig';

function* requestAPI(url, method, params, baseApi = BASE_API) {
    console.log(url, params);
    try {
        const res = yield fetch(`${baseApi}${url}`, {
            method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${params.token || ''}`,
            },
            body: JSON.stringify(params),
        }).then((response) => {
            // console.log(response);
            return response.json();
        });
        return res;
    } catch (error) {
        console.log(error);
        return -1;
    }
}

function* requestGetAPI(url, params, baseApi = BASE_API) {
    try {
        let uri = [];
        for (var key in params) {
            if (key !== 'token') uri.push(key + '=' + params[key]);
        }
        uri = uri.join('&');
        url = url + '?' + uri;
        // console.log(baseApi, url, params);
        const header =
            params && params.token
                ? {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*',
                      Authorization: `Bearer ${params.token || ''}`,
                  }
                : {
                      Accept: 'application/json',
                  };

        // console.log(header);
        const res = yield fetch(`${baseApi}${url}`, {
            method: 'GET',
            headers: header,
        }).then((response) => {
            // console.log(response);
            return response.json();
        });
        if (res.status === 200) {
            return res;
        }
        return -1;
    } catch (error) {
        // console.log(error);
        return -1;
    }
}

function* requestPostAPI(url, params, baseApi = BASE_API) {
    return yield requestAPI(url, 'POST', params, baseApi);
}

function* requestPutAPI(url, params, baseApi = BASE_API) {
    return yield requestAPI(url, 'PUT', params, baseApi);
}

function* postParentAPI(url, params, baseApi = PARENT_API) {
    // console.log(url, params, 'aaaa');
    return yield requestAPI(url, 'POST', params, baseApi);
}

function* getParentAPI(url, params, baseApi = PARENT_API) {
    return yield requestGetAPI(url, params, baseApi);
}

const API = {
    requestGetAPI,
    getParentAPI,
    requestPostAPI,
    postParentAPI,
    requestPutAPI,
};

export default API;
