import { useEffect, useRef } from "react";

const useResize = (handler) => {
    const savedHandler = useRef(handler);
    const ref = useRef(null);

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const element = ref.current;
        if(!element) return;

        // 크기 변화를 추적
        const observer = new ResizeObserver((entries) => {
            savedHandler.current(entries[0].contentRect);
        });

        observer.observe(element);

        return () => {
            observer.disconnect();
        }
    }, [ref])

    return ref;
}

export default useResize;