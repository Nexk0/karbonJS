import Head from 'next/head';
import { Box, Container, Grid, Typography, Paper, Button } from '@mui/material';
import { Transport } from '../components/dashboard/transport';
import { Alimentation } from '../components/dashboard/alimentation';
import { Numerique } from '../components/dashboard/numerique';
import { Divers } from '../components/dashboard/divers';
import { DashboardLayout } from '../components/dashboard-layout';
import { bgcolor } from '@mui/system';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Karbon | Quizz
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 0
      }}
    >
      <Typography
      color="textSecondary"
      variant="h1"
      margin={5}
      marginLeft={10}>
        Quizz!
      </Typography>
      
      <Container maxWidth={false}>
          
          <Grid
            item xs={12}
            container
            justifyContent="space-around"
            alignItems="stretch"
            spacing={2}
            direction="column"
          >{/* ========================== ALIMENTATION =============================== */}
            <Grid item xs={12}>
              <Typography variant='h3' align='center'>
                1/5 - Alimentation
              </Typography>
            </Grid> 

            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{ display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 },
                }}
              >              
                <Paper elevation={3} >
                  <Typography>
                    Êtes-vous vegan?
                  </Typography>
                  <br/>
                  <FormControl>
                    <RadioGroup defaultValue="2" name="vegan" id='1'>
                      <FormControlLabel value={1} control={<Radio />} label="Oui" />
                      <FormControlLabel value={2} control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>

            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{ display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 },
                }}
              >              
                <Paper elevation={3} >
                  <Typography>
                    Êtes-vous végétarien?
                  </Typography>
                  <br/>
                  <FormControl>
                    <RadioGroup defaultValue="2" name="vegetarien" id='2'>
                      <FormControlLabel value={1} control={<Radio />} label="Oui" />
                      <FormControlLabel value={2} control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>
            {/* ========================== TRANSPORT =============================== */}
            <Grid item xs={12}>
              <Typography variant='h3' align='center'>
                2/5 - Transport
              </Typography>
            </Grid> 

            <Grid item xs={12} sm={10} md={8} lg={7}>
              <Box
                sx={{ display: 'flex', flexWrap: 'wrap',
                  '& > :not(style)': { m: 1, width: "100%", height: "auto", padding: 5 },
                }}
              >              
                <Paper elevation={3} >
                  <Typography>
                    Êtes-vous vegan?
                  </Typography>
                  <br/>
                  <FormControl>
                    <RadioGroup defaultValue="2" name="vegan" id='1'
                    >
                      <FormControlLabel value={1} control={<Radio />} label="Oui" />
                      <FormControlLabel value={2} control={<Radio />} label="Non" />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>
            </Grid>

            
            {/* ========================== BOUTON SUBMIT =============================== */}
            <Box sx={{ py: 3, marginLeft: 8}} >
              <Button
                color="primary"
                size="large"
                type="submit"
                variant="contained"
                sx={{ borderRadius: 5}}
              >
                Suivant
              </Button>
            </Box>

          </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
