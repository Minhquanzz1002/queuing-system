import { createWhitelistFilter } from 'redux-persist-transform-filter';
import {configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import appReducer, {RootState} from "@modules/index";
// import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';

const profile = createWhitelistFilter('profile', ['token']);

const persistConfig : PersistConfig<RootState>  = {
    key: 'CMS',
    version: 1,
    storage,
    transforms: [profile],
    whitelist: ['profile']
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
        }
    })
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export default store;