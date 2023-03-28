import { useAsyncFn } from "../../hooks";


export default {
    title: 'Hook/useAsyncFn',
}

const asyncReturnValue = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Success');
        }, 1000);
    })
};

const asyncReturnError = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Error');
        }, 1000);
    })
};

export const Success = () => {
    const [state, callback] = useAsyncFn(async () => {
        return await asyncReturnValue();
    }, []);

    return (
        <div>
            <div>useAsyncFn 테스트</div>
            <div>{JSON.stringify(state)}</div>
            <button onClick={callback} disabled={state.isLoading}>비동기 호출</button>
        </div>
    )
}

export const Error = () => {
    const [state, callback] = useAsyncFn(async () => {
        return await asyncReturnError();
    }, []);

    return (
        <div>
            <div>useAsyncFn 테스트</div>
            <div>{JSON.stringify(state)}</div>
            <button onClick={callback} disabled={state.isLoading}>비동기 호출</button>
        </div>
    )
}