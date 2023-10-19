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
import { reduxStorage } from './reduxStorage';
import { authAPI } from '../services/apis';
import { RESET_STATE_ACTION_TYPE } from './actions/reset';
import { authorizationMethodsReducer } from './slices/AuthorizationMethods';
import { userInfoReducer } from './slices/userInfo';

const authorizationMethodsPersistConfig = {
  key: 'authorizationMethods',
  storage: reduxStorage,
  whitelist: ['sms', 'passcode', 'faceId', 'biometric'],
};

const themePersistConfig = {
  key: 'theme',
  storage: reduxStorage,
  whitelist: ['theme', 'darkMode'],
};

const userInfoPersistConfig = {
  key: 'userInfo',
  storage: reduxStorage,
  whitelist: ['accessToken', 'refreshToken'],
};

const persistedAuthorizationMethods = persistReducer(
  authorizationMethodsPersistConfig,
  authorizationMethodsReducer,
);
const persistedTheme = persistReducer(themePersistConfig, themeReducer);
const persistedUserInfo = persistReducer(userInfoPersistConfig, userInfoReducer);

const reducers = combineReducers({
  authorizationMethods: persistedAuthorizationMethods,
  theme: persistedTheme,
  userInfo: persistedUserInfo,
  [authAPI.reducerPath]: authAPI.reducer,
});

const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }
  return reducers(state, action);
};

const middlewares = [authAPI.middleware];

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
