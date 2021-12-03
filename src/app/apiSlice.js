import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/search/'}),
    // tagTypes: ['Repos'],
    endpoints: builder => ({
        getRepositories: builder.query({
            query: (ask = '2221112222', page, sort = '') => `repositories?q=${ask}&page=${page}&sort=${sort}`,
            // providesTags: ['Repos']
        })
    })
});

export const {useGetRepositoriesQuery} = apiSlice;