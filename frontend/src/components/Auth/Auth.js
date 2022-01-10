import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import useStyles from './Styles'
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Input from './Input'

import { signin, signup } from '../../actions/auth'
import { useDispatch } from 'react-redux';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

function Auth({ history }) {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const [isSignUp, setIsSignup] = useState(false)
  const dispatch = useDispatch()
  const classes = useStyles()


  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignUp) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5' >{'isSignUp' ? 'Sign Up' : 'sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignUp && (
                <>


                  <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                  <Input name='lastName' label='Last Name' handleChange={handleChange} half />


                </>
              )
            }
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
          </Grid>
          <Button type='submit' color='primary' className={classes.submit}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid>
              <Button onClick={switchMode}>
                {isSignUp ? 'Already have account ? Sign in' : 'Dont have an acoount ? Sing up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

    </Container>
  )
}

export default Auth
