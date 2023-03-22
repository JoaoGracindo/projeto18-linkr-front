import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}


async function postLike(token, post_id) {
   
    const promise = await axios.post(`${BASE_URL}/likes/${post_id}`, {}, createConfig(token))
    return promise

}

async function deleteLike(token, post_id) {
   
    const promise = await axios.delete(`${BASE_URL}/likes/${post_id}`, {}, createConfig(token))
    return promise

}

const apiLikes = { postLike, deleteLike }

export default apiLikes