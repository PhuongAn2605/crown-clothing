import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomeButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        }catch(error){
            console.log(error);
        }

    }

    handleOnChange = event =>   {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your eamil and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email' 
                        type='email' 
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleOnChange}
                        required
                    ></FormInput>
                    {/* <label>Email</label> */}
                    <FormInput 
                        name='password' 
                        type='password' 
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleOnChange}
                        required
                    ></FormInput>
                    {/* <label>Password</label> */}

                    {/* <input type='submit' value='Submit Form'></input> */}
                    <div className='buttons'>
                        <CustomeButton type='submit'>SIGN IN</CustomeButton>
                        <CustomeButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                            </CustomeButton>
                    </div>
                    

                </form>
            </div>
        )
    };
}

export default SignIn;