import React, {useRef, useState} from 'react'
import { 
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    SignupLinksWrapper,
    SignupLink
} from './ForgotElements'
import {useAuth} from '../contexts/AuthContext'


const ForgotPassword = () => {
    const emailRef = useRef()
   
  
    const {resetPassword} = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
   

    async function handleSubmit(e){
        e.preventDefault()


        try{
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        }catch{
            setError('Failed to reset password')
        }
        setLoading(false)
    }


    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Courtspace</Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit}  action='#'>
                            <FormH1> Reset Password</FormH1>
                            {error && <FormH1> {error} </FormH1>}
                            {message && <FormH1> {message} </FormH1>}
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' ref ={emailRef}  required/>

                           

                            <FormButton disabled={loading} type = 'submit'>Reset Password</FormButton>
        
                            <SignupLinksWrapper>
                              
                                <SignupLink to='/signin'>Login</SignupLink>
                            </SignupLinksWrapper>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default ForgotPassword
