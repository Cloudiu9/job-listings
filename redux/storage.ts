// redux/storage.ts
import { Storage } from "redux-persist";

const createNoopStorage = (): Storage => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const createBrowserStorage = (): Storage => {
  return {
    getItem(key) {
      return Promise.resolve(window.localStorage.getItem(key));
    },
    setItem(key, value) {
      return Promise.resolve(window.localStorage.setItem(key, value));
    },
    removeItem(key) {
      return Promise.resolve(window.localStorage.removeItem(key));
    },
  };
};

const storage: Storage =
  typeof window !== "undefined" ? createBrowserStorage() : createNoopStorage();

export default storage;
