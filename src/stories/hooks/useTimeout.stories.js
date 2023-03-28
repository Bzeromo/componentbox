import { useTimeout } from "../../hooks";

export default {
    title: 'Hook/useTimeout',
}

export const Default = () => {
    const clear = useTimeout(() => {
        alert('launch');
    }, 3000);

    return (
        <>
            <div>useTimeOut 테스트</div>
            <button onClick={clear}>정지</button>
        </>
    )
}