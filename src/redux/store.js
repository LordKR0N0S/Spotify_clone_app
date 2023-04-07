import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';
import { shazamCoreApiArtists } from './services/shazamCoreArtists';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [shazamCoreApiArtists.reducerPath]: shazamCoreApiArtists.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  })
    .concat(shazamCoreApi.middleware)
    .concat(shazamCoreApiArtists.middleware),
});
