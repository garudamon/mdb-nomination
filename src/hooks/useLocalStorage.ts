import { useState, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            console.error(error);
        }
    };
    return [storedValue, setValue] as const;
}

export const useSampleStorage = () => {
    const [sample, setSample] = useLocalStorage<string>('key', 'value')
    const changeUpdate = useCallback(() => setSample('update'), [])
    return { sample, changeUpdate }
}

/**
 * example:
 * const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
 * const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
 */