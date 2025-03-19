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
                  I'm a seasoned Database Administrator with a comprehensive background in database management and security. With extensive experience in the field, I've developed expertise in managing complex database environments, implementing robust security measures, and optimizing database performance for enterprise-level applications.
                </Typography>
                <Typography paragraph>
                  My journey in database administration has equipped me with deep knowledge in various database technologies and best practices. I'm passionate about maintaining data integrity, ensuring system availability, and implementing efficient database solutions that drive business success.
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
                  I specialize in comprehensive database management and security solutions. My expertise includes:
                </Typography>
                <Typography component="ul" sx={{ pl: 2 }}>
                  <li>Database design and architecture</li>
                  <li>Performance optimization and tuning</li>
                  <li>Security implementation and auditing</li>
                  <li>High availability and disaster recovery</li>
                  <li>Data migration and integration</li>
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