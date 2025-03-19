import React from 'react';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e0e0e0',
        position: 'relative',
        zIndex: 1,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0, 100, 0, 0.1), transparent)'
        }
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
l          <Typography 
            variant="body2" 
            sx={{
              color: '#333',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}
          >
            © {new Date().getFullYear()} Frank Ndaruhutse. All rights reserved +250 785 174 116.
          </Typography>
          
          <Stack direction="row" spacing={2}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                href="https://github.com/Nfrank3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{
                  color: '#333',
                  '&:hover': {
                    color: '#006400',
                    backgroundColor: 'rgba(0, 100, 0, 0.08)'
                  }
                }}
              >
                <GitHub />
              </IconButton>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                href="https://www.linkedin.com/in/frank-ndaruhutse-73417310b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  color: '#333',
                  '&:hover': {
                    color: '#006400',
                    backgroundColor: 'rgba(0, 100, 0, 0.08)'
                  }
                }}
              >
                <LinkedIn />
              </IconButton>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                href="https://twitter.com/frankndaruhutse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                sx={{
                  color: '#333',
                  '&:hover': {
                    color: '#006400',
                    backgroundColor: 'rgba(0, 100, 0, 0.08)'
                  }
                }}
              >
                <Twitter />
              </IconButton>
            </motion.div>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;