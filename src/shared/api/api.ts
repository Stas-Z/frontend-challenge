import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
    },
})
