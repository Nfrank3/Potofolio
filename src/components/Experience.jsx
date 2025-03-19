import React from 'react';
import { Box, Container, Typography, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Database Administrator',
    company: 'GTBANK Plc',
    period: '2022 - Present',
    description: 'database administrator responsible for managing and optimizing enterprise-level database systems. Implemented robust security measures and improved system performance.',
    achievements: [
      'Designed and implemented high-availability database solutions',
      'Led successful migration of legacy systems to modern database platforms',
      'Reduced system downtime by 60% through proactive monitoring',
      'Mentored junior DBAs and established best practices'
    ]
  },
  {
    title: 'Database Administrator',
    company: 'TNET-Rwanda',
    period: '2021-2022',
    description: 'Managed multiple database environments ensuring optimal performance and security. Implemented disaster recovery solutions and automated routine maintenance tasks.',
    achievements: [
      'Optimized database performance reducing query response time by 50%',
      'Developed comprehensive database security protocols',
      'Successfully managed database upgrades with zero downtime'
    ]
  },
  {
    title: 'IT OFFICER ',
    company: 'DIGITALINE Ltd',
    period: '2019-2021',
    description: 'Assisted in daily database operations, maintenance, and troubleshooting. Contributed to performance tuning and security implementation projects.',
    achievements: [
      'Assist users with technical issues, including hardware and software problems.',
      'Monitor the organization\'s servers, networks, and systems for performance, availability, and security',
    ]
  }
];

function Experience() {
  return (
    <Box
      id="experience"
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
          Professional Experience
        </Typography>

        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index !== experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
                      {exp.company}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                      {exp.period}
                    </Typography>
                    <Typography paragraph sx={{ mt: 2 }}>
                      {exp.description}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
                      Key Achievements:
                    </Typography>
                    <ul style={{ marginTop: 0 }}>
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                        >
                          <Typography paragraph sx={{ mb: 1 }}>
                            {achievement}
                          </Typography>
                        </motion.li>
                      ))}
                    </ul>
                  </Paper>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}

export default Experience;