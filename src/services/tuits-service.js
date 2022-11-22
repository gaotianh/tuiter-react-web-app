import axios from 'axios';      // import axios
// const TUITS_API = 'http://localhost:4000/api/tuits';    // location of HTTP services
// const TUITS_API = 'https://tuiter-node-server-application.herokuapp.com/api/tuits';
const API_BASE = process.env.DB_CONNECTION_STRING;
const TUITS_API = `${API_BASE}/tuits`;

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits = async () => {              // async tags this function as asynchronous
    const response = await axios.get(TUITS_API);    // send HTTP GET request to TUITS_API
    const tuits = response.data;                    // extract JSON from response from server
    return tuits;                                   // return tuits
}

export const deleteTuit = async (tid) => {
    const response = await axios                // send HTTP DELETE request to server
        .delete(`${TUITS_API}/${tid}`)      // append tuit's ID to URL
    return response.data
}

export const updateTuit = async (tuit) => {
     const response = await axios
         .put(`${TUITS_API}/${tuit._id}`, tuit);
    // await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}
