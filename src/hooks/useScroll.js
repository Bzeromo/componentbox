import { useEffect, useRef } from "react"
import useRafState from "./useRafState";

const useScroll = () => {
    const [state, setState] = useRafState({ x: 0, y: 0 });
    const ref =useRef(null);

    useEffect(() => {
        const element = ref.current;
        if(!element) return;

        const handleScroll = () => {
            setState({
                x: ref.current.scrollLeft,
                y: ref.current.scrollTop
            })
        }

        // passive: true로 설정해놓을 경우 preventDefault의 경우와 같을 때 브라우저가 체크하지 않아 성능적인 이점을 가질 수 있다
        element.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            element.removeEventListener('scroll', handleScroll);
        }
    }, [ref, setState]);

    return [ref, state];
}

export default useScroll;