/* eslint-disable max-len */
const storage = window.localStorage;

type Key = string;
type Keys = Array<Key>;

const localStorageService = {
  getItem(name: Key): unknown | null {
    const result: string | null = storage.getItem(name);
    if (typeof result === 'string') return JSON.parse(result);

    return null;
  },

  setItem<T>(name: Key, value: T) {
    storage.setItem(name, JSON.stringify(value));
  },

  removeItem(name: Key) {
    storage.removeItem(name);
  },

  getItems(arr: Keys): Record<Key, unknown> {
    return arr.reduce((acc, name) => ({ ...acc, [name]: this.getItem(name) }), {});
  },

  setItems<Value>(record: Record<Key, keyof Value>) {
    Object.entries(record).forEach(([name, value]) => this.setItem(name, value));
  },

  removeItems(arr: Keys) {
    arr.forEach(name => this.removeItem(name));
  },

  clear() {
    storage.clear();
  },
};

export default localStorageService;
