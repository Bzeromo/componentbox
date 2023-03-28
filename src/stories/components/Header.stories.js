import { Header } from "../../components";

export default {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        level: { control: {type: "range", min: 1, max: 6}},
        strong: { control: 'boolean'},
        underline: { control: 'boolean'},
        color: { control: 'color'},
    }
};

export const Default = (args) => {
    return (
        <>
            <Header {...args}>Header</Header>
        </>
    );
};