import Head from 'next/head';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';

const Products = () => (
  <>
    <Head>
      <title>
        Products | Material Kit
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
        Modifier mon avatar
      </Typography>
      <Container maxWidth={false}>
        <Grid
        item xs={12}
          container
        >
          <Grid
            item xs={8}
            container
            direction={"column"}
            justifyContent="space"
            alignItems="center"
          >
            <Grid
              item xs={10}
              container
              spacing={3}
            >
              {products.map((product) => (
                <Grid
                  item
                  key={product.id}
                  sm={4}
                  xs={6}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            <Grid
              item xs={2}
            >
              
            </Grid>
          </Grid>
          <Grid
            item xs={4}
            container
            spacing={3}
          >
          </Grid>
        </Grid>
            
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 1
          }}
        >
        </Box>
      </Container>
    </Box>
  </>
);

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Products;
