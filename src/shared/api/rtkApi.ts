import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const apiKey = import.meta.env.VITE_API_KEY
            headers.set('Content-Type', 'application/json')
            headers.set('x-api-key', apiKey)
        },
    }),
    endpoints: (builder) => ({}),
})
