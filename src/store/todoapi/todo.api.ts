import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
    reducerPath: 'todo/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        getTodos: build.query<any, string>({
            query: (limit: string) => ({
                url: 'todos',
                params: {
                    _limit: limit
                }
            })
        })
    })
})

export const { useGetTodosQuery } = todoApi