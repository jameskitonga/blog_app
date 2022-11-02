import styled from "styled-components";

const Container = styled.div``
const LabelsArea=styled.label``
const InputArea = styled.input``
const PasswordCridentions=styled.password``
const EmailRequired=styled.email``


const LoginItems = () => {
    return (
        <Container>
            <LabelsArea>Firstname:</LabelsArea>
            <InputArea type="text" placeholder="Name" />
            <LabelsArea>Lastname:</LabelsArea>
            <InputArea type="Text" placeholder="Lastname" />
            <EmailRequired type="email" placeholder="E-mail"/>
            <PasswordCridentions type="Text" placeholder="password"/>
            <PasswordCridentions type="Text" placeholder="confirm password"/>
      </Container>  
    )
}
export default LoginItems;