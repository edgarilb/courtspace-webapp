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
} from './SigninElements'
import {useAuth} from '../contexts/AuthContext'
import {useHistory} from 'react-router-dom'

const Signin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()


        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')

        }catch{
            setError('Failed to log in')
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
                            <FormH1> Sign in into your account</FormH1>
                            {error && <FormH1> {error} </FormH1>}

                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' ref ={emailRef}  required/>

                            <FormLabel htmlFor = 'for'>Password</FormLabel>
                            <FormInput type='password' ref ={passwordRef}  required/>

                            <FormButton disabled={loading} type = 'submit'>Continue</FormButton>
        
                            <SignupLinksWrapper>
                                <SignupLink to='/forgot-password'>Forgot password</SignupLink>
                                <SignupLink to='/signup'>Need an account?</SignupLink>
                            </SignupLinksWrapper>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Signin
