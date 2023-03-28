import styled from "@emotion/styled";
import { useState } from "react";
import { Image } from "../../components";
import { useResize } from "../../hooks";

const Background = styled.div`
    width: 100%;
    height: 400px;
    background-color: blue;
`;

export default {
    title: 'Hook/useResize',
}

export const Default = () => {
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const ref = useResize(rect => {
        setImageSize({ width: rect.width, height: rect.height })
    }) 

    return (
        <Background ref={ref}>
            <Image 
            width={imageSize.width} 
            height={imageSize.height}
            src="https://picsum.photos/1000" 
            mode="contain"></Image>
        </Background>
    )
}