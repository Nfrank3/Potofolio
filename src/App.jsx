import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Hero />
        <About />
        <Skills />
        <Experience />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;