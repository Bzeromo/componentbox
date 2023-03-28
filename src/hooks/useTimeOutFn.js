import { useCallback, useEffect, useRef } from "react";

// 함수 호출을 통한 useTimeOut
const useTimeOutFn = (fn, ms) => {
    const timeoutId = useRef();
    const callback = useRef(fn);

    useEffect(() => {
        callback.current = fn;
    }, [fn]);

    const run = useCallback(() => {
        timeoutId.current && clearTimeout(timeoutId.current);

        timeoutId.current = setTimeout(() => {
            callback.current()
        }, ms)
    }, [ms])

    const clear = useCallback(() => {
        timeoutId.current && clearTimeout(timeoutId.current);
    }, [])

    useEffect(() => clear, [clear]); // timeout이 남지 않도록 한다.

    return [run, clear];
};

export default useTimeOutFn;