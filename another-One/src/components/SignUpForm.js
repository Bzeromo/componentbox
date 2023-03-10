import Input from "./Input";
import Button from "./Button";
import useForm from "../hooks/useForm";
import ErrorText from "./ErrorText";
import CardForm from "./CardForm";
import Title from "./Title";

const SignUpForm = ({ onSubmit }) => {
    const { errors, isLoading, handleChange, handleSubmit } = useForm({
        initialValues: {
            name:'',
            password: '',
            passwordConfirm: '',
        },
        onSubmit,
        validate: ({ name, password, passwordConfirm }) => {
            const newErrors = {};
            if(!name) newErrors.name = '아이디를 입력해주세요.';
            if(!password) newErrors.password = "비밀번호를 입력해주세요.";
            if(password !== passwordConfirm) newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
            return newErrors;
        }
    })

    return (
    <CardForm onSubmit={handleSubmit}>
        <Title>회원 가입</Title>
        <Input type="text" name="id" placeholder="아이디" onChange={handleChange}/>
        {errors.name && <ErrorText>{errors.name}</ErrorText>}
        <Input type="password" name="password" placeholder="비밀번호" onChange={handleChange} style={{marginTop: 8}}/>
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <Input type="password" name="password-confirm" placeholder="비밀번호 확인" onChange={handleChange} style={{marginTop: 8}}/>
        {errors.passwordConfirm && <ErrorText>{errors.passwordConfirm}</ErrorText>}
        <Button type="submit" disabled={isLoading} style={{marginTop: 16}}>회원 가입</Button>
    </CardForm>
    );
}

export default SignUpForm;