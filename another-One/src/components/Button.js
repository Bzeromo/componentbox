import styled from "@emotion/styled";

const Button = styled.button`
    diplay: block;
    width: 100%;
    height: 32px;
    padding: 8px 6px;
    color: white;
    border: none;
    border-radius: 4px;
    outline: none;
    background-color: black;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background-color: #111;
    }

    &:active {
        background-color: #222;
    }

    &:disabled {
        background-color: #888;
    }
`;

export default Button;