import axios from 'axios'

export const $api = axios.create({
    baseURL: 'https://api.thecatapi.com/',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key':
            'live_bjOPd49SQd1d9QgoDcCErYxIrmYIwfKrJYFlfnYv0VyZzqAsiCfiQ17tRddMzJDu',
    },
})
