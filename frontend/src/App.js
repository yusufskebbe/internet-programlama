import React, { useEffect } from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { getPosts } from './actions/posts'
import instaverse from './images/logo.png'
import { useDispatch } from 'react-redux';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())

  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center' >InstaLife</Typography>
        <img src={instaverse} alt='instaverse' height='60'></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>

        </Container>

      </Grow>

    </Container>
  );
}

export default App;
