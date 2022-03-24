import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Logement } from '../components/dashboard/logement';
import { Transport } from '../components/dashboard/transport';
import { Alimentation } from '../components/dashboard/alimentation';
import { Numerique } from '../components/dashboard/numerique';
import { Divers } from '../components/dashboard/divers';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Emissions } from '../components/dashboard/Emissions';
import { ProchRecomp } from '../components/dashboard/proch-recomp';
import { TotalCustomers } from '../components/dashboard/total-customers';
import { ObjDuJour } from '../components/dashboard/obj-du-jour';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';
import { bgcolor } from '@mui/system';

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
        Pierre le pd
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

            <Grid item xs={12}>
              <Logement sx ={{bgcolor: '#F5D4F0'}} />
            </Grid> 

            <Grid item xs={12}>
              <Transport sx ={{bgcolor: '#FFE4CF'}} />
            </Grid> 

            <Grid item xs={12}>
              <Alimentation sx ={{bgcolor: '#D4EBF5'}} />
            </Grid> 

            <Grid item xs={12}>
              <Numerique sx ={{bgcolor: '#FCE2DC'}} />
            </Grid> 

            <Grid item xs={12}>
              <Divers sx ={{bgcolor: '#F8FAD2'}} />
            </Grid> 

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
