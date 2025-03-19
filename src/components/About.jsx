import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Box
      id="about"
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      sx={{
        py: 10,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component={motion.h2}
          sx={{
            mb: 6,
            textAlign: 'center',
            fontWeight: 600,
            color: 'primary.main'
          }}
        >
          About Me
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: '#ffffff',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Who I Am
                </Typography>
                <Typography paragraph>
                  I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end development. With [X] years of experience in the field, I've had the opportunity to work on diverse projects that have shaped my expertise in creating efficient, scalable, and user-friendly applications.
                </Typography>
                <Typography paragraph>
                  My journey in software development began with [Your Background]. Since then, I've been continuously learning and adapting to new technologies while maintaining a focus on writing clean, maintainable code.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: '#ffffff',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  What I Do
                </Typography>
                <Typography paragraph>
                  I specialize in building modern web applications using cutting-edge technologies. My expertise includes:
                </Typography>
                <Typography component="ul" sx={{ pl: 2 }}>
                  <li>Full-stack web development</li>
                  <li>Responsive and interactive UI design</li>
                  <li>RESTful API development</li>
                  <li>Database design and optimization</li>
                  <li>Cloud services integration</li>
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;