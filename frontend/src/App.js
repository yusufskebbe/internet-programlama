import React from 'react';
import { Container} from '@material-ui/core'
import { BrowserRouter  , Switch , Route} from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Home from './components/Home/Home';


const App =() => {

  return (
    <Container maxWidth='lg'>
      <Navbar/>
      <Home/>
    </Container>
  );
}

export default App;
