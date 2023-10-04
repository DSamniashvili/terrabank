import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { api } from 'services/api';
import { themeReducer } from './slices/theme';
import { counterReducer } from './slices/counter';
import { reduxStorage } from './reduxStorage';

const counterPersistConfig = {
  key: 'counter',
  storage: reduxStorage,
  whitelist: ['currentNumber'],
};

const themePersistConfig = {
  key: 'theme',
  storage: reduxStorage,
  whitelist: ['darkMode', 'theme'],
};

const persistedCounter = persistReducer(counterPersistConfig, counterReducer);
const persistedTheme = persistReducer(themePersistConfig, themeReducer);

const reducers = combineReducers({
  counter: persistedCounter,
  theme: persistedTheme,
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
