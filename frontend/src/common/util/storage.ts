const set = (key: string, value: string) => localStorage.setItem(key, value);

const get = (key: string) => localStorage.getItem(key);

const remove = (key: string) => localStorage.removeItem(key);

const storage = {
  set,
  get,
  remove,
};
export default storage;
