import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  version: 1,
  storage, // storage engine (localstorage, sessionstorage etc.)
};

export default persistConfig;
