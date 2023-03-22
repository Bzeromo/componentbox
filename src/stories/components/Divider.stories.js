import Divider from "../../components/Divider"
import Text from "../../components/Text"

export default {
    title: 'Component/Divider',
    component: Divider,
};

export const Horizontal = () => {
    return (
        <>
            <Text>위</Text>
            <Divider type="horizontal"></Divider>
            <Text>아래</Text>
        </>
    )
}

export const vertical = () => {
    return (
        <>
            <Text>왼쪽</Text>
            <Divider type="vertical"></Divider>
            <Text>오른쪽</Text>
        </>
    )
}