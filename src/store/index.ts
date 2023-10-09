import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit';
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
import { themeReducer } from './slices/theme';
import { counterReducer } from './slices/counter';
import { reduxStorage } from './reduxStorage';
import { exampleApi } from './apis';
import { RESET_STATE_ACTION_TYPE } from './actions/reset';

const counterPersistConfig = {
  key: 'counter',
  storage: reduxStorage,
  whitelist: ['currentNumber'],
};

const themePersistConfig = {
  key: 'theme',
  storage: reduxStorage,
  whitelist: ['theme', 'darkMode'],
};

const persistedCounter = persistReducer(counterPersistConfig, counterReducer);
const persistedTheme = persistReducer(themePersistConfig, themeReducer);

const reducers = combineReducers({
  counter: persistedCounter,
  theme: persistedTheme,
  [exampleApi.reducerPath]: exampleApi.reducer,
});

const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }
  return reducers(state, action);
};

const middlewares = [exampleApi.middleware];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducers>;
