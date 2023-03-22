import { useEffect, useRef } from "react";

// 모바일의 경우 touchstart
const events = ['mousedown', 'touchstart']

const useClickAway = (handler) => {
    const ref = useRef(null);
    const savedHandler = useRef(handler);

    // useClickAway 이벤트가 발생할 때마다 렌더링되지 않고 ref 값만 바뀌게 설정한다.
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler])

    useEffect(() => {
        const element = ref.current;
        if(!element) return;

        const handleEvent = (e) => {
            !element.contains(e.target) && savedHandler.current(e);
        }

        for(const eventName of events) {
            document.addEventListener(eventName, handleEvent);
        }

        return () => {
            for(const eventName of events) {
                document.removeEventListener(eventName, handleEvent);
            }
        };
    }), [ref];

    return ref;
}

export default useClickAway;