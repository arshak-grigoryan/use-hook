import { useEffect, useState } from 'react';

export default function useNetworkStatus() {
    const [online, setOnline] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnline(false);
        });

        window.addEventListener('online', () => {
            setOnline(true);
        });
    }, []);

    useEffect(() => {
        if (!online) {
            alert('offline');
        }
    }, [online]);
}