import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import ImageComponent from "../Image";
import AvatarGroup from "./AvatarGroup";

const ShapeToCssValue = {
    circle: '50%',
    round: '4px',
    square: '0px'
}

const AvatarWrapper = styled.div`
    position: relative;
    display: inline-block;
    border: 1px solid #dadada;
    border-radius: ${({shape}) => ShapeToCssValue[shape]};
    background-color: #eee;
    overflow: hidden;

    > img {
        transition: opacity 0.2s ease-out;
    }
`

const Avatar = ({
    lazy,
    threshold,
    src,
    size= 70,
    shape="circle",
    placeholder,
    alt,
    mode="cover",
    __TYPE,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        image.onload = () => setLoaded(true);
    }, [src]);
    return (
        <AvatarWrapper {...props} shape={shape}>
            <ImageComponent 
            block
            lazy={lazy}
            threshold={threshold}
            width={size}
            height={size}
            src={src}
            placeholder={placeholder}
            alt={alt}
            mode={mode}
            style={{opacity:loaded ? 1 : 0}}
            />
        </AvatarWrapper>
    )
}

// 아바타 타입이 들어왔는지 확인하기 위해 defaultProps로 따로 지정한다.
Avatar.defaultProps = {
    __TYPE: "Avatar"
};

// 다른 타입으로 변환할 수 없도록 강제한다.
Avatar.propTypes = {
    __TYPE: "Avatar",
}

Avatar.Group = AvatarGroup;

export default Avatar;