import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar , Typography , Toolbar , Button,Avatar} from '@material-ui/core'
import useStyles from './styles'
import instaLife from '../../images/logo.png'
// import { Avatar, Button, Toolbar } from '@material-ui/core'

export const Navbar = () => {
    const classes = useStyles()
    const user = null
    return (
     <AppBar className={classes.appBar} position='static' color='inherit'>
         <div className={classes.brandContainer}>
         <Typography className={classes.heading} component= {Link} to="/" variant='h2' align='center' >InstaLife</Typography>
        <img className={classes.image} src={instaLife} alt='instLife' height='60'></img>
         </div>
         <Toolbar className={classes.toolbar}>
             {
                 user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt = {user.result.name} ser={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                          </Avatar>
                          <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                          <Button variant='contained' className={classes.logout} color = "secondary">Logout</Button>

                    </div>

                 ): (

                    <Button component={Link} to = "/auth" variant="contained" color='primary'>Sign In</Button>

                 )
             }

         </Toolbar>
      
      </AppBar>
    )
}
