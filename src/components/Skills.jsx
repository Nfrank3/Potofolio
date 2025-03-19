import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Database Management', items: ['Oracle', 'SQL Server', 'MySQL', 'Database Design'] },
  { category: 'Database Security', items: ['Access Control', 'Data Encryption', 'Security Auditing', 'Compliance', 'Vulnerability Assessment', 'Patch Management'] },
  { category: 'Performance & Optimization', items: ['Query Optimization', 'Index Management', 'Performance Tuning', 'Capacity Planning', 'Resource Monitoring', 'Troubleshooting'] },
  { category: 'High Availability & Recovery', items: ['Backup Strategies', 'Disaster Recovery', 'Replication', 'Clustering', 'Data Migration', 'System Monitoring'] }
];

function Skills() {
  return (
    <Box
      id="skills"
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
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {skills.map((skillGroup, index) => (
            <Grid item xs={12} md={6} key={skillGroup.category}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: '#ffffff',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {skillGroup.category}
                  </Typography>
                  <Grid container spacing={2}>
                    {skillGroup.items.map((skill) => (
                      <Grid item xs={6} key={skill}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Paper
                            elevation={0}
                            sx={{
                              p: 1,
                              textAlign: 'center',
                              backgroundColor: '#f5f5f5',
                              borderRadius: 1,
                              '&:hover': {
                                backgroundColor: '#e0e0e0'
                              }
                            }}
                          >
                            <Typography variant="body1">{skill}</Typography>
                          </Paper>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Skills;