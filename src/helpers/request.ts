export const makeRequest = (endpoint: string, data: object, method: string = 'GET') => {

    if(method === 'GET'){
        return fetch(endpoint);
    }else {
        return fetch(endpoint, {
            method, 
            headers: {'Content-type': 'application/json'}, 
            body: JSON.stringify(data)
        });
    }
}