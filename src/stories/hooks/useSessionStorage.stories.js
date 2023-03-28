import { useSessionStorage } from "../../hooks";

export default {
    title: 'Hook/useSessionStorage',
}

export const Default = () => {
    const [status, setStatus] = useSessionStorage('status', '404 NOT FOUND');

    return (
        <div>
            <button onClick={() => setStatus("200 OK")}>Resend</button>
            {status}
        </div>
    )
}