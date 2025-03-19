import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#ffffff',
        color: '#4CAF50',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%234CAF50\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.1,
          animation: 'pattern-shift 20s linear infinite'
        },
        '@keyframes pattern-shift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' }
        }
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2
            }}
          >
            Hi, I'm Frank Ndaruhutse
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 400,
              mb: 2,
              color: '#4CAF50'
            }}
          >
            DATABASE ADMINISTRATOR
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              mb: 4,
              maxWidth: '600px',
              color: 'text.secondary'
            }}
          >
            a Database Administrator managing performance, security, backups, replication, ETL processes, compliance, and high availability for databases.
          </Typography>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => window.open('mailto:+250 785 174 116')}
              sx={{
                borderRadius: '30px',
                padding: '12px 30px',
                fontSize: '1.1rem',
                textTransform: 'none',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, #fafafa 0%, transparent 100%)'
        }}
      />
    </Box>
  );
}

export default Hero;