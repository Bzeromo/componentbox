import { useEffect } from "react";
import useTimeOutFn from "./useTimeOutFn"

// useTimeOutFn 컴포넌트를 이용한 useTimeout
const useTimeout = (fn, ms) => {
    const [run, clear] = useTimeOutFn(fn, ms);

    useEffect(() => {
        run();
        return clear;
    }, [run, clear])

    return clear;
};

export default useTimeout;