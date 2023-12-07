import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue?: T) {
  const readValue = (): T | null => {
    if (typeof window === "undefined") {
      return initialValue ?? null;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue ?? null;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue ?? null;
    }
  };

  const [storedValue, setStoredValue] = useState<T | null>(readValue);

  const setValue = (value: T | ((val: T | null) => T)) => {
    if (typeof window == "undefined") {
      console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`);
      return;
    }

    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;