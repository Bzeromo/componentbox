import SignUpForm from "../components/SignUpForm";

export default {
    title: 'Components/SignUpForm',
    component: SignUpForm,
    argTypes: {
        onSubmit: { action: "onSubmit" }
    }
};

export const Default = (args) => {
    return <SignUpForm {...args} />;
};