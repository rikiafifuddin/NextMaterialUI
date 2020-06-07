import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Budget } from '../components/Budget';
import { TotalUsers } from '../components/TotalUsers';
import { TasksProgress } from '../components/TasksProgress';
import { TotalProfit } from '../components/TotalProfit';
import { LatestSales } from '../components/LatestSales';
import { UsersByDevice } from '../components/UsersByDevice';
import { LatestProducts } from '../components/LatestProducts';
import { LatestOrders } from '../components/LatestOrders';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

export default function Dashboard() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <Budget />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalUsers />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksProgress />
        </Grid>
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TotalProfit />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestSales />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <UsersByDevice />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <LatestProducts />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
    )
}