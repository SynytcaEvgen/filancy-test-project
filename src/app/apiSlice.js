import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com/search/'}),
    tagTypes: ['Repos'],
    endpoints: builder => ({
        getRepositories: builder.query({
            query: (arr) => `repositories?q=${arr[0]}&page=${arr[1]}&sort=${arr[2]}`,
            providesTags: ['Repos']
        })
    })
});

export const {useGetRepositoriesQuery, useGetChangePageQuery} = apiSlice;