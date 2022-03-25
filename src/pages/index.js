import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { SideActions } from '../components/side-actions';
import { Emissions } from '../components/dashboard/Emissions';
import { ProchRecomp } from '../components/dashboard/proch-recomp';
import { ObjDuJour } from '../components/dashboard/obj-du-jour';
import { DashboardLayout } from '../components/dashboard-layout';
import { bgcolor } from '@mui/system';

const items = [
  {
    href: '/',
    title: 'Logement',
    color: '#F5D4F0'
  },
  {
    href: '/',
    title: 'Alimentation',
    color:'#FFE4CF'
  },
  {
    href: '/',
    title: 'Transport',
    color: '#D4EBF5'
  },
  {
    href: '/',
    title: 'Numérique',
    color: '#FCE2DC'
  },
  {
    href: '/',
    title: 'Divers',
    color: '#F8FAD2'
  },
]

const Dashboard = () => (
  <>
    <Head>
      <title>
        Karbon
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
        Bonjour, bonjour !
      </Typography>

      <Container maxWidth={false}>
        <Grid
          item={12}
          container
          spacing={3}
        >
          <Grid
            item xs={9}
            container
            spacing={2}
          >
            <Grid
              item
              sm={4}
              xs={12}
            >
              <ObjDuJour sx={{ height: '100%' }} />
            </Grid>
            <Grid
              item
              sm={8}
              xs={12}
            >
              <ProchRecomp />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <Emissions />
            </Grid>
          </Grid>
          
          <Grid
            item xs={3}
            container
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
            >
              <Typography variant='h3' align='center'>
                Mes actions quotidiennes
              </Typography>
            </Grid> 

            <Box sx={{ flexGrow: 1 }}>
              {items.map((item) => (
                <SideActions
                  href={item.href}
                  title={item.title}
                  color={item.color}
                  bgcolor={item.color}
                />
              ))}
            </Box>
            
          </Grid>
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
