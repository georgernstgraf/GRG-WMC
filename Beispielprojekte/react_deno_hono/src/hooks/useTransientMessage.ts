import { useEffect, useState } from "react";

export function useTransientMessage(duration = 2400) {
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        if (message === null) {
            return;
        }

        const timer = setTimeout(() => setMessage(null), duration);

        return () => clearTimeout(timer);
    }, [message, duration]);

    return [message, setMessage] as const;
}
