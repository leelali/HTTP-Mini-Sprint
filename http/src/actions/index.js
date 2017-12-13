import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    const apiUrl = 'http://localhost:5000/friends';
    const friendsRequest = axios.get(apiUrl);
    // redux-promise middleware takes care of resolving the promise
    return {
    	type: GET_FRIENDS,
    	payload: friendsRequest
    };
};



// http is stateless
// most operations are asynchronous
// Promise: is an object, substitute for callbacks
// 