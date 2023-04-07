import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApiArtists = createApi({
  reducerPath: 'shazamCoreApiArtists',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v2',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getArtistDetails: builder.query({
      query: (artistId) => `artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const {
  useGetArtistDetailsQuery,
} = shazamCoreApiArtists;
