import React, { useState } from 'react';
import Title from '../components/Title';
import styles from './SignUp.module.css';
import Button from '../components/Button';
import Input from '../components/Input';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <section className={ styles.container }>
      <Title title='Welcome Onboard!' />
      <p>
        Let’s help you meet up your task
      </p>
      <Input
        placeholder="Enter your Full Name"
        type="text"
        required
        value={ fullName }
        onChange={ (e) => setFullName(e.target.value) }
      />
      <Input
        placeholder="Enter your Email address"
        type="email"
        required
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <Input
        placeholder="Create a Password"
        type="password"
        required
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <Input
        placeholder="Confirm your Password"
        type="password"
        required
        value={ passwordConfirm }
        onChange={ (e) => setPasswordConfirm(e.target.value)}
      />
      <Button>
        Sign Up 
      </Button>
    </section>
  )
}

export default SignUp;
