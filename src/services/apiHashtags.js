import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL

function createConfig(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
}

function getTags(description){
    const tags = description?.match(/\B#\w+/g).map(hashtag => hashtag.slice(1));
    return tags
}

async function getTrending() {
    try {
        const promise = await axios.get(`${BASE_URL}/hashtags/trending`)
        return promise
    } catch (error) {
        console.log(error)
    }
}

async function postTag(description, post_id, config) {
    const tags = getTags(description)
    if(!tags) return {}
    try {
        const promise = await axios.post(`${BASE_URL}/hashtags`, {tags, post_id}, config)
        return promise
    } catch (error) {
        console.log(error)
    }
}

async function deleteTag(description, post_id, config) {
    try {
        const promise = await axios.delete(`${BASE_URL}/hashtags/${post_id}`, {}, config)
        return promise
    } catch (error) {
        console.log(error)
    }
}

async function getHashtagPosts(hashtag, token){
    try {
        const promise = axios({ method: 'get', url: `${BASE_URL}/hashtags/${hashtag}`, headers: { 'Authorization': 'Bearer ' + token } })/* await axios.get(`${BASE_URL}/hashtags/${hashtag}`, {}, config) */
        return promise
    } catch (error) {
        console.log(error)
    }
}
const apiHashtags = { getTrending, postTag, deleteTag, getHashtagPosts }

export default apiHashtags