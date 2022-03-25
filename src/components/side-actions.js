import {Card, CardContent, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';



export const SideActions = (props) => {
  const {title, color} = props;


  return (
    <Card
      component="a"
      sx={{ 
        height: '100%', 
        borderRadius: 3,
        display: 'flex',
        backgroundColor: color,
        margin: 3,
        justifyContent: 'center'
    }}
      {...props}
      margin={3}
      borderRadius={5}
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