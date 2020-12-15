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
    SignupLink,
    SignupLinksWrapper
} from './SignupElements'
import {useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
import {db} from '../../firebase'


export default function Signup  ()  {
    const emailRef = useRef()
    // const [currentUser] = useState()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password do not match')
        }

        try{
            setError('')
            setLoading(true)
           const user = await signup(emailRef.current.value, passwordRef.current.value)
           // code from csv3 when signup//
            const courtName = ''
            const address = ''
            const zipCode = ''
            const sportsArray = []
            const email = emailRef.current.value
            const userId = user.user.uid
            // console.log('user Id is:', userId)
            const userRef = db.collection('ownerUserPending').doc(userId)
            return userRef.set({
            courtName:courtName,
            address:address,
            zipCode:zipCode,
            sportsArray:sportsArray,
            email:email,
            password: passwordRef.current.value,
            active:false,
            picture:'https://firebasestorage.googleapis.com/v0/b/courtspace-v2.appspot.com/o/userIcon2.png?alt=media&token=6138af30-7564-4838-9dc4-cdd644c3ab6a',
            uid:userId,
            })
            .then(() => {    
            // console.log('user Id is:', userId)
                const userRef = db.collection('ownerUsers').doc(userId)
                return userRef.set({
                courtName:courtName,
                sportsArray:sportsArray,
                email:email,
                password:passwordRef.current.value,
                uid:userId,
                earningsHistory:[],
                activedStripe:false,
                fetchClientIdSubColFlag:false,
                })
            })
            
            .catch((error) => {
                console.log(error.message)
            })
            .then(()=>{
                history.push('/dashboard')
            })
           // end //
        }catch{
            setError('Failed to create account')
        }
        setLoading(false)

        
    }

    return (
    <>
        <Container>
            <FormWrap>
                <Icon to='/'>Courtspace Desk</Icon>
                <FormContent>
                    <Form onSubmit={handleSubmit} action='#'>
                        <FormH1> Create an account</FormH1>
                        {error && <FormH1> {error} </FormH1>}
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' ref ={emailRef} required/>

                        <FormLabel htmlFor = 'for'>Password</FormLabel>
                        <FormInput type='password' ref={passwordRef} required/>

                        <FormLabel htmlFor = 'for'>Password Confirmation</FormLabel>
                        <FormInput type='password' ref={passwordConfirmRef} required/>

                        <FormButton disabled={loading} type = 'submit'>Continue</FormButton>
                        
                        <SignupLinksWrapper>
                                <SignupLink to='/signin'>Already have an account?</SignupLink>
                        </SignupLinksWrapper>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
    )
}


