import React, { useState, useEffect } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from './Styles'
import instaLife from '../../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode'


function Navbar({ location }) {

  const classes = useStyles()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useNavigate()
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    history.push('/auth')
    setUser(null)
  }

  useEffect(() => {
    const token = user?.token
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }


    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location, user?.token])

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer} >
        <Typography className={classes.heading} component={Link} to='/' variant='h2' align='center' >InstaLife</Typography>
        <img className={classes.image} src={instaLife} alt='instLife' height='60'></img>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.user_name} variant='h6' >{user.result.name}</Typography>
            <Button variant='contained' className={classes.logout} onClick={logout} color='secondary' >Logout</Button>
          </div>
        ) : (
          <Link to='/auth' ><Button color='primary'>Sign In</Button></Link>

        )

        }

      </Toolbar>
    </AppBar>
  )
}

export default Navbar
