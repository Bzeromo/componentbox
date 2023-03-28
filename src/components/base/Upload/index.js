import styled from "@emotion/styled";
import { useRef, useState } from "react";

const UploadContainer = styled.div`
    display: inline-block;
    cursor: pointer;
`

const Input = styled.input`
    display: none;
`

const Upload = ({ children, droppable, name, accept, value, onChange, ...props }) => {
    const [file, setFile] = useState(value);
    const [dragging, setDragging] = useState(false);
    const inputRef = useRef(null);

    const handleFileChange = (e) => {
        const files = e.target.files;
        const changedFile = files[0];
        setFile(changedFile)
        onChange && onChange(changedFile);
    }

    // 파일을 직접 선택할 때
    const handleChooseFile = () => {
        inputRef.current.click();
    };

    // 드래그를 통해 파일이 들어왔을 때
    const handleDragEnter = (e) => {
        if(!droppable) return;

        e.preventDefault(); // 브라우저 기본 이벤트를 막는다.
        e.stopPropagation(); // 부모나 자식 컴포넌트로 이벤트가 전파되는 것을 막는다.

        if(e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setDragging(true);
        }
    } 

    // 파일이 드래그를 통해 나갈 때
    const handleDragLeave = (e) => {
        if(!droppable) return;

        e.preventDefault(); 
        e.stopPropagation(); 

        setDragging(false);
    }

    // 이벤트 전파(새 창이 뜨는 등)를 막기 위함
    const handleDragOver = (e) => {
        if(!droppable) return;

        e.preventDefault(); 
        e.stopPropagation(); 
    }

    // 실제로 파일을 놓았을 때
    const handleFileDrop = (e) => {
        if(!droppable) return;

        e.preventDefault(); 
        e.stopPropagation(); 

        const files = e.dataTransfer.files;
        const changedFile = files[0];
        setFile(changedFile);
        onChange && onChange(changedFile);
        setDragging(false);
    }

    return (
        <UploadContainer 
        onClick={handleChooseFile}
        onDrop={handleFileDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        {...props}>
            <Input ref={inputRef} type="file" name={name} accept={accept} onChange={handleFileChange} />
            {typeof children === 'function' ? children(file, dragging) : children}
        </UploadContainer>
    )
}

export default Upload;