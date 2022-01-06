import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import instaverse from './images/logo.png'
import Posts from './components/Form/Form'
import Form from './components/Posts/Posts'
import usestyles from './styles'



function App() {
  const classes = usestyles ()
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center' >InstaLife</Typography>
        <img className={classes.image} src={instaverse} alt='instaverse' height='60'></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={4}>
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
