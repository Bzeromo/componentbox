import { useState } from "react";
import { useHotKey } from "../../hooks";


export default {
    title: 'Hook/useHotKey',
}

export const Default = () => {
    const [value, setValue] = useState('');

    const hotkeys = [
        {
            global: true,
            combo: 'meta',
            onKeyDown: (e) => {
                alert('meta')
            }
        },
        {
            global: true,
            combo: 'alt+w',
            onKeyDown: (e) => {
                alert('alt+w')
            }
        }, 
        {
            global: true,
            combo: 'ctrl+shift+k',
            onKeyDown: (e) => {
                alert('ctrl+shift+k')
            }
        }, 
        {
            combo: 'esc',
            onKeyDown: (e) => {
                setValue("");
            }
        }, 
    ];

    const { handleKeyDown } = useHotKey(hotkeys);

    return (
        <>
            <h1>useHotKey 테스트</h1>
            <h2>1. meta</h2>
            <h2>2. alt + w</h2>
            <h2>3. ctrl + shift + k</h2>

            <h1>로컬 테스트</h1>
            <h2>esc를 눌러 입력창 지우기</h2>
            <input onKeyDown={handleKeyDown} value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    )
}