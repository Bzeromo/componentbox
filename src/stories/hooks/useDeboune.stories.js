import { Fragment, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export default {
    title: 'Hook/useDebounce',
}

const companies = [
    'kakao',
    'Naver',
    'Daangn',
    'Coupang',
    'Line'
]

export const Default = () => {
    const [value, setValue] =useState('');
    const [result, setResult] = useState([]);

    useDebounce(() => {
        if(value === '') setResult([]);
        else {
                setResult(
                companies.filter((company) => 
                    company.toLowerCase().includes(value.toLowerCase())
                    )
                );
        }
    }, 300, [value]);

    return (
        <div>
            <h1>대기업 검색 해보슈</h1>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <div>
                {result.map((item) => (
                    <Fragment key={item}>
                        {item}
                        <br />
                    </Fragment>
                ))}
            </div>
        </div>
    )
};