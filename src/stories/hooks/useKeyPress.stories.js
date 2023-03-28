import { useKeyPress } from "../../hooks";


export default {
    title: 'Hook/useKeyPress',
}

export const Default = () => {
    const pressed = useKeyPress('?');

    return <>{pressed ? '아이린 조 아' : '물음표를 눌러보세요'}</>;
}