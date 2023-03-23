import { useEffect } from "react";
import useTimeOutFn from "./useTimeOutFn";

const useDebounce = (fn, ms, deps) => {
    const [run, clear] = useTimeOutFn(fn, ms);

    // eslint-disable-next-line
    useEffect(run, deps);

    return clear;
};

export default useDebounce;