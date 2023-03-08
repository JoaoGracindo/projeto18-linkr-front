import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL

async function getTrending(){
    try {
        const promise = await axios.get(`${BASE_URL}/hashtags/trending`)
        return promise
    } catch (error) {
        console.log(error)
    }
}

const apiHashtags = {getTrending}

export default apiHashtags