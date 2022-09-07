import { Box, Card, Grid, Link, Typography } from '@mui/material';

// ==============================|| TYPOGRAPHY ||============================== //

const TypographySample = () => (
  <Box p={2}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Card title='Heading'>
          <Box p={2}>
            <Grid container direction='column' spacing={1}>
              <Grid item>
                <Typography variant='h1' gutterBottom>
                  h1. Heading
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h2' gutterBottom>
                  h2. Heading
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h3' gutterBottom>
                  h3. Heading
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h4' gutterBottom>
                  h4. Heading
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' gutterBottom>
                  h5. Heading
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h6' gutterBottom>
                  h6. Heading
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card title='Sub title'>
          <Box p={2}>
            <Grid container direction='column' spacing={1}>
              <Grid item>
                <Typography variant='subtitle1' gutterBottom>
                  subtitle1. Lorem ipsum dolor sit connecter adieu siccing
                  eliot. Quos blanditiis tenetur
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='subtitle2' gutterBottom>
                  subtitle2. Lorem ipsum dolor sit connecter adieu siccing
                  eliot. Quos blanditiis tenetur
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card title='Body'>
          <Box p={2}>
            <Grid container direction='column' spacing={1}>
              <Grid item>
                <Typography variant='body1' gutterBottom>
                  body1. Lorem ipsum dolor sit connecter adieu siccing eliot.
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' gutterBottom>
                  body2. Lorem ipsum dolor sit connecter adieu siccing eliot.
                  Quos blanditiis tenetur unde suscipit, quam beatae rerum
                  inventore consectetur, neque doloribus, cupiditate numquam
                  dignissimos laborum fugiat deleniti? Eum quasi quidem
                  quibusdam.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Card title='Extra'>
          <Box p={2}>
            <Grid container direction='column' spacing={1}>
              <Grid item>
                <Typography variant='button' display='block' gutterBottom>
                  button text
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='caption' display='block' gutterBottom>
                  caption text
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='overline' display='block' gutterBottom>
                  overline text
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body2'
                  color='primary'
                  component={Link}
                  href='https://berrydashboard.io'
                  target='_blank'
                  display='block'
                  underline='hover'
                  gutterBottom
                >
                  https://berrydashboard.io
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default TypographySample;
