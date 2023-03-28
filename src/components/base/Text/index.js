import PropTypes from 'prop-types';

const Text = ({ 
    children,
    block,
    paragraph,
    size, 
    strong, 
    underline, 
    delete: del, 
    color,
    mark,
    code, 
    ...props 
}) => {
    const Tag = block ? 'div' : paragraph ? 'p' : 'span';

    const fontStyle = {
        fontWeight: strong ? 'bold' : undefined,
        fontSize: size,
        textDecoration: underline ? 'underline' : undefined,
        color,
    };

    // 취소선은 이미 예약어가 존재하여 del로 따로 지정한다.
    // 여기부터 태그를 이용하여 수정하는 방식을 사용한다.
    if(del) {
        children = <del>{children}</del>
    }

    if(mark) {
        children = <mark>{children}</mark>
    }

    if(code) {
        children = <code>{children}</code>
    }

    return (
        <Tag style={{...props.style, ...fontStyle}} {...props}>
            {children}
        </Tag>
    )
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.number,
    block: PropTypes.bool,
    paragraph: PropTypes.bool,
    delete: PropTypes.bool,
    code: PropTypes.bool,
    mark: PropTypes.bool,
    strong: PropTypes.bool,
    color: PropTypes.string,
}

export default Text;