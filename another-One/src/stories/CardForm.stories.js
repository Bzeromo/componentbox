import CardForm from "../components/CardForm";

export default {
    title: 'Components/CardForm',
    component: CardForm,
};

export const Default = (args) => {
    return <CardForm {...args}>CardForm</CardForm>;
};