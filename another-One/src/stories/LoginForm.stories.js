import LoginForm from "../components/LoginForm";

export default {
    title: 'Components/LoginForm',
    component: LoginForm,
    argTypes: {
        onSubmit: { action: "onSubmit" }
    }
};

export const Default = (args) => {
    return <LoginForm {...args} />;
};