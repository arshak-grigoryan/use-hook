import { useEffect, useState } from "react";

const useDebounce = (value: string, time: number = 200) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, time);

        return () => {
            clearTimeout(timerId);
        };
    }, [value, time]);

    return debouncedValue;
};

export default useDebounce;

