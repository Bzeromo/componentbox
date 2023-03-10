import Title from "../components/Title";

export default {
    title: 'Components/Title',
    component: Title,
};

export const Default = (args) => {
    return <Title {...args}>Title</Title>;
};