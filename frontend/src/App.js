import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { getPosts } from './actions/posts'
import instaLife from './images/logo.png'
import { useDispatch } from 'react-redux'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import usestyles from './styles'



function App() {

  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch()

  const classes = usestyles()

  useEffect(() => {
    dispatch(getPosts())

  }, [currentId, dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center' >InstaLife</Typography>
        <img className={classes.image} src={instaLife} alt='instLife' height='60'></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>

        </Container>

      </Grow>

    </Container>
  );
}

export default App;
