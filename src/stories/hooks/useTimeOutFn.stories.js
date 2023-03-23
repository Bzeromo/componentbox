import useTimeOutFn from "../../hooks/useTimeOutFn";


export default {
    title: 'Hook/useTimeoutFn',
}

export const Default = () => {
    const [run, clear] = useTimeOutFn(() => {
        alert('launch');
    }, 3000);

    return (
        <>
            <div>useTimeOutFn 테스트</div>
            <button onClick={run}>3초 뒤 실행</button>
            <button onClick={clear}>정지</button>
        </>
    )
}