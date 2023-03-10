import Text from "../components/Text";

export default {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        size: {control: 'number'},
        strong: {control: 'boolean'},
        underline: {control: 'boolean'},
        delete: {control: 'boolean'},
        color: {control: 'color'},
        block: {control: 'boolean'},
        paragraph: {control: 'boolean'},
        mark: {control: 'boolean'},
        code: {control: 'boolean'},
    }
};

export const Default = (args) => {
    return (
        <>
            <Text {...args}>Text</Text>
            <Text {...args}>Text</Text>
        </>
    );
};