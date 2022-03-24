import {Card, CardContent, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';


export const SideActions = (props) => {
  const { href, title, color} = props;


  return (
    <Card
      component="a"
      sx={{ height: '100%', bgcolor: color }}
      {...props}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          justifyContent="center"
        >
          <Grid item>
            <Typography
              color="textPrimary"
              variant="h6"
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
        
      </CardContent>
    </Card>
)};

SideActions.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string
};