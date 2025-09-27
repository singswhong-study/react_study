import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";

//persist 설정 임포트
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'; // localstorage 를 기본 저장소로 사용

//1. Root reducer 생성
const rootReducer = combineReducers({
  user: userReducer,
  todos: null, //// todos 상태는 null. 관리할 스토어는 쭉 추가
});

// 2. Persist Config 정의
const persistConfig = {
  key: 'root', // localStorage에 저장될 때의 키
  storage, // 사용할 저장소 (localStorage, sessionStorage 등)
  // whitelist: ['user', 'todos'], // 'user'와 'todos' 상태만 저장 (선택 사항)
  // blacklist: ['someTransientState'], // 특정 상태는 저장하지 않음 (선택 사항)
};

// 3. Rersist Reducer 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // Redux-persist를 사용할 때는 직렬화되지 않은 액션이 발생할 수 있으므로
    // 미들웨어 설정을 통해 이 경고를 무시하도록 설정하는 것이 일반적
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER', 'persist/FLUSH'],
      },
    })
});

export const persistor = persistStore(store);