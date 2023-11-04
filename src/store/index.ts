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
import { authAPI } from '../services/apis';
import { RESET_STATE_ACTION_TYPE } from './actions/reset';
import { authorizationMethodsReducer } from './slices/AuthorizationMethods';
import { userInfoReducer } from './slices/userInfo';
import {
  authorizationMethodsPersistConfig,
  dashboardPersistConfig,
  themePersistConfig,
  userInfoPersistConfig,
} from './config';
import { dashboardAPI } from 'services/apis/dashboardAPI/dashboardAPI';
import { dashboardReducer } from './slices/dashboard';

const persistedAuthorizationMethods = persistReducer(
  authorizationMethodsPersistConfig,
  authorizationMethodsReducer,
);
const persistedTheme = persistReducer(themePersistConfig, themeReducer);
const persistedUserInfo = persistReducer(userInfoPersistConfig, userInfoReducer);
const persistedDashboard = persistReducer(dashboardPersistConfig, dashboardReducer);

const reducers = combineReducers({
  authorizationMethods: persistedAuthorizationMethods,
  theme: persistedTheme,
  userInfo: persistedUserInfo,
  dashboard: persistedDashboard,
  [authAPI.reducerPath]: authAPI.reducer,
  [dashboardAPI.reducerPath]: dashboardAPI.reducer,
});

const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }
  return reducers(state, action);
};

const middlewares = [authAPI.middleware, dashboardAPI.middleware];

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
